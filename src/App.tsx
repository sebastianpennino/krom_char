import { useEffect, useReducer, useState } from "react";
import { Dropdown } from "./components/Dropdown";
import { NumericInput } from "./components/NumericInput";
import { TextInput } from "./components/TextInput";
import {
  species,
  classes,
  subclasses,
  PlayerClasses,
  characteristicsToName,
  Characteristics,
  selectFirstSubClass,
  PlayerSpecies,
  PlayerSubClasses,
  ValidCharacteristics,
  speciesStat,
} from "./types/types";
import { getRandomCharacterName } from "./utils";

const langs = {
  esp: 0,
  eng: 1,
};

const chosenLanguage = langs.esp;

const initialState = {
  charSpecies: PlayerSpecies.HUMANO,
  charClass: PlayerClasses.GUERRERO,
  charSubClass: PlayerSubClasses.BARBARO,
  charStats: {
    [Characteristics.FUERZA]: 1,
    [Characteristics.RESISTENCIA]: 1,
    [Characteristics.AGILIDAD]: 1,
    [Characteristics.RAZON]: 1,
    [Characteristics.INTUICION]: 1,
    [Characteristics.SABIDURIA]: 1,
    [Characteristics.SOCIAL]: 1,
    [Characteristics.PERCEPCION]: 1,
    [Characteristics.VOLUNTAD]: 1,
  },
  charName: getRandomCharacterName(),
  sumLimit: 32,
};

// @ts-ignore
function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_LIMIT": {
      return {
        ...state,
        sumLimit: action.payload,
      };
    }
    case "SELECT_SPECIES": {
      return {
        ...state,
        charSpecies: action.payload,
      };
    }
    case "SELECT_CLASS": {
      return {
        ...state,
        charClass: action.payload,
        charSubClass: selectFirstSubClass(action.payload),
      };
    }
    case "SELECT_SUB_CLASS": {
      return {
        ...state,
        charSubClass: action.payload,
      };
    }
    case "RESET_STATS": {
      return {
        ...state,
        charStats: { ...initialState.charStats },
      };
    }
    case "INCREASE_STAT": {
      const newStats = {
        ...state.charStats,
        [action.payload]: state.charStats[action.payload] + 1,
      };
      return {
        ...state,
        charStats: newStats,
      };
    }
    case "DECREASE_STAT": {
      const newStats = {
        ...state.charStats,
        [action.payload]: state.charStats[action.payload] - 1,
      };
      return {
        ...state,
        charStats: newStats,
      };
    }
    case "CHANGE_STAT": {
      const charStats = {
        ...state.charStats,
        [action.payload.statName]: action.payload.val,
      };
      return {
        ...state,
        charStats,
      };
    }
    case "CHANGE_NAME": {
      return {
        ...state,
        charName: action.payload,
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const sumLimit = state.sumLimit;

  const sumOfStats = Object.entries(state.charStats).reduce((acc, el) => {
    const [key, val] = el as [string, number];
    return acc + val;
  }, 0);

  const getModifiersForCurrentSpecies = () => {
    // @ts-ignore
    if (speciesStat[state.charSpecies]) {
      // @ts-ignore
      return speciesStat[state.charSpecies].mods;
    }
    return {
      [Characteristics.FUERZA]: -1,
      [Characteristics.RESISTENCIA]: -1,
      [Characteristics.AGILIDAD]: -1,
      [Characteristics.RAZON]: -1,
      [Characteristics.INTUICION]: -1,
      [Characteristics.SABIDURIA]: -1,
      [Characteristics.SOCIAL]: -1,
      [Characteristics.PERCEPCION]: -1,
      [Characteristics.VOLUNTAD]: -1,
    };
  };

  const changeSpecies = (newValue: any) => {
    dispatch({
      type: "SELECT_SPECIES",
      payload: newValue,
    });
  };
  const changeClass = (newValue: any) => {
    dispatch({
      type: "SELECT_CLASS",
      payload: newValue,
    });
  };
  const changeSubClass = (newValue: any) => {
    dispatch({
      type: "SELECT_SUB_CLASS",
      payload: newValue,
    });
  };
  const changeStats = (newValue: any, statName: string) => {
    if (sumOfStats < sumLimit) {
      if (newValue === "inc") {
        return dispatch({
          type: "INCREASE_STAT",
          payload: statName,
        });
      }
    }
    if (newValue === "dec") {
      return dispatch({
        type: "DECREASE_STAT",
        payload: statName,
      });
    }
    if (typeof newValue === "number") {
      return dispatch({
        type: "CHANGE_STAT",
        payload: { val: newValue, statName },
      });
    }
  };

  // @ts-ignore
  const [derivative, setDerivative] = useState({
    golpe: 2,
    golpe2m: 3,
    maxTA: 2,
    reflejos: 2,
    reFisica: 2,
    reMagica: 2,
    reMental: 2,
    magicTA: 0,
  });

  // @ts-ignore
  const getFinalStat = (statName) => {
    return (
      state.charStats[statName] + getModifiersForCurrentSpecies()[statName]
    );
  };

  const calculateDerivativeStats = () => {
    const golpe = getFinalStat(Characteristics.FUERZA) * 2;
    const golpe2m = Math.round(golpe * 1.5);
    const maxTA = getFinalStat(Characteristics.RESISTENCIA) * 2;
    const reflejos =
      1 +
      Math.round(
        (getFinalStat(Characteristics.PERCEPCION) +
          getFinalStat(Characteristics.INTUICION) +
          getFinalStat(Characteristics.AGILIDAD)) /
          4.5
      );
    const reFisica =
      1 +
      Math.round(
        (getFinalStat(Characteristics.FUERZA) +
          getFinalStat(Characteristics.RESISTENCIA)) /
          3
      );
    const reMagica =
      1 +
      Math.round(
        (getFinalStat(Characteristics.RAZON) +
          getFinalStat(Characteristics.SABIDURIA)) /
          3
      );
    const reMental =
      1 +
      Math.round(
        (Math.max(
          getFinalStat(Characteristics.RAZON),
          getFinalStat(Characteristics.INTUICION),
          getFinalStat(Characteristics.SABIDURIA)
        ) +
          getFinalStat(Characteristics.VOLUNTAD)) /
          3
      );
    const magicTA = Math.max(reMagica * 2 - 4, 0);
    setDerivative({
      golpe,
      golpe2m,
      maxTA,
      reflejos,
      reFisica,
      reMagica,
      reMental,
      magicTA,
    });
  };

  const resetStats = () => {
    dispatch({
      type: "RESET_STATS",
      payload: null,
    });
  };

  useEffect(() => {
    calculateDerivativeStats()
  }, [state]);


  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-gray-900">
        <div className="text-white">Logo</div>
        <div className="text-white">Menu Icon</div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4 space-y-4">
        {/* Visual Debug */}
        {/* 
        <small>
          <pre>{JSON.stringify({ ...state, sum: sumOfStats }, null, 2)}</pre>
        </small> 
        */}
        <div>
          <TextInput
            chosenLang={chosenLanguage}
            initialValue={state.charName}
          />
        </div>
        <div className="flex space-x-4">
          <div className="w-1/3">
            <Dropdown
              title={["Especie", "Species"]}
              options={species}
              chosenLang={chosenLanguage}
              changeFn={changeSpecies}
              selection={state.charSpecies}
            />
          </div>
          <div className="w-1/3">
            <Dropdown
              title={["Clase", "Class"]}
              options={classes}
              chosenLang={chosenLanguage}
              changeFn={changeClass}
              selection={state.charClass}
            />
          </div>
          <div className="w-1/3">
            <Dropdown
              title={["Sub-Clase", "Sub-Class"]}
              options={subclasses}
              chosenLang={chosenLanguage}
              filterFn={(opt: any) => {
                return (
                  opt.dependsOn === (state.charClass || PlayerClasses.ASESINO)
                );
              }}
              changeFn={changeSubClass}
              selection={state.charSubClass}
            />
          </div>
        </div>
        <div>
          <label htmlFor="limit">
            {
              ["Limite de caracteristicas", "Point limit for characteristics"][
                chosenLanguage
              ]
            }
          </label>
          <select
            id="limit"
            className="block w-full mt-1"
            onChange={(e) => {
              dispatch({
                type: "CHANGE_LIMIT",
                payload: parseInt(e.target.value, 10) || 20,
              });
            }}
            defaultValue={state.sumLimit}
          >
            <option value="45">Max</option>
            <option value="32">32</option>
            <option value="28">28</option>
            <option value="26">26</option>
            <option value="24">24</option>
            <option value="22">22</option>
            <option value="20">20</option>
          </select>
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="w-full px-4 py-2 text-white rounded"
            onClick={resetStats}
          >
            {["Reset Stats", "Reset Stats"][chosenLanguage]}
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {Object.entries(state.charStats).map(([key, val]: any) => {
            return (
              <NumericInput
                key={key}
                title={characteristicsToName[key][chosenLanguage]}
                unique={key}
                changeFn={changeStats}
                value={val}
                mod={getModifiersForCurrentSpecies()[key]}
                min={getModifiersForCurrentSpecies()[key] < 0 ? 2 : 1}
                isUnder={val + getModifiersForCurrentSpecies()[key] <= 0}
              />
            );
          })}
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="block w-full mt-1">
            <TextInput
              chosenLang={chosenLanguage}
              title={["Golpe", "Impact"]}
              value={String(derivative.golpe)}
              disabled={true}
            />
          </div>
          <div className="block w-full mt-1">
            <TextInput
              chosenLang={chosenLanguage}
              title={["Golpe A2M", "Impact 2H"]}
              value={String(derivative.golpe2m)}
              disabled={true}
            />
          </div>
          <div className="block w-full mt-1">
            <TextInput
              chosenLang={chosenLanguage}
              title={["Reflejos", "Reflex"]}
              value={String(derivative.reflejos)}
              disabled={true}
            />
          </div>
          <div className="block w-full mt-1">
            <TextInput
              chosenLang={chosenLanguage}
              title={["TA Magico", "Magic TA"]}
              value={String(derivative.magicTA)}
              disabled={true}
            />
          </div>
          <div className="block w-full mt-1">
            <TextInput
              chosenLang={chosenLanguage}
              title={["R. Fisica", "Physic R."]}
              value={String(derivative.reFisica)}
              disabled={true}
            />
          </div>
          <div className="block w-full mt-1">
            <TextInput
              chosenLang={chosenLanguage}
              title={["R. Magica", "Magic R."]}
              value={String(derivative.reMagica)}
              disabled={true}
            />
          </div>
          <div className="block w-full mt-1">
            <TextInput
              chosenLang={chosenLanguage}
              title={["R. Mental", "Mental R."]}
              value={String(derivative.reMental)}
              disabled={true}
            />
          </div>
          <div className="block w-full mt-1">
            <TextInput
              chosenLang={chosenLanguage}
              title={["Max TA", "Max TA"]}
              value={String(derivative.maxTA)}
              disabled={true}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-center px-4 py-3 text-gray-500 bg-gray-200">
        <div className="text-sm">© 2023 All rights reserved.</div>
{/* 
        <button
          className="w-full px-4 py-2 text-white rounded"
          onClick={calculateDerivativeStats}
        >
          {["Calcular Stats", "Calculate Stats"][chosenLanguage]}
        </button>
*/}
      </footer>
    </div>
  );
}

export default App;
