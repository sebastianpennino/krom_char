import { Reducer, useEffect, useReducer, useState } from "react";
import {
  Characteristics,
  ValidCharacteristics,
} from "./typings/Characteristics";
import { getRandomCharacterName } from "./utils";
import FlagButton from "./components/FlagButton";
import { ReactComponent as KromsysLogo } from "./assets/k-logo.svg";
import { ResultsPage } from "./compositions/ResultPage";
import { InputPage } from "./compositions/InputPage";
import {
  AppAction,
  CharacterAction,
  characterReducer,
} from "./reducers/characterReducer";
import {
  PlayerSpecies,
  ValidPlayerSpecies,
  speciesStat,
} from "./typings/Species";
import {
  PlayerClasses,
  PlayerSubClasses,
  ValidPlayerClasses,
  ValidPlayerSubClasses,
} from "./typings/Classes";
import { PlayerSkillPacks, ValidPlayerSkillPacks } from "./typings/SkillPacks";

const langs = {
  esp: 0,
  eng: 1,
};

const defaultLang = langs.esp;

export type AppState = {
  charSpecies?: ValidPlayerSpecies;
  charClass?: ValidPlayerClasses;
  charSubClass?: ValidPlayerSubClasses;
  charStats: Record<ValidCharacteristics, number>;
  charName: string;
  sumLimit: number;
  showResults: boolean;
  charSkillPack: ValidPlayerSkillPacks;
};

export const initialState: AppState = {
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
  showResults: false,
  charSkillPack: PlayerSkillPacks.NOBLE,
};

function App() {
  const [state, dispatch] = useReducer<Reducer<AppState, AppAction>>(
    characterReducer,
    initialState
  );

  const [choosenLang, setLang] = useState<number>(defaultLang);

  const sumOfStats = Object.entries(state.charStats).reduce((acc, el) => {
    const [_key, val] = el as [string, number];
    return acc + val;
  }, 0);

  const changeResults = (change: boolean) => {
    dispatch({
      type: CharacterAction.TOGGLE_RESULTS,
      payload: change,
    });
  };

  const [derivative, setDerivative] = useState({
    golpe: 2,
    golpe2m: 3,
    maxTA: 2,
    reflejos: 2,
    reFisica: 2,
    reMagica: 2,
    reMental: 2,
    magicTA: 0,
    mistica: 3,
  });

  const getModifiersForCurrentSpecies = () => {
    const cleanSpecies = state.charSpecies as ValidPlayerSpecies;
    if (speciesStat[cleanSpecies]) {
      return speciesStat[cleanSpecies].mods;
    }
    // In case of error return something
    return {
      ...initialState.charStats,
    };
  };

  const getFinalStat = (statName: ValidCharacteristics) => {
    return (
      state.charStats[statName] + getModifiersForCurrentSpecies()[statName]
    );
  };

  const calculateDerivativeStats = () => {
    const golpe = getFinalStat(Characteristics.FUERZA) * 2;
    const golpe2m = Math.round(golpe * 1.5);
    const maxTA = getFinalStat(Characteristics.RESISTENCIA) * 2;
    const reflejos = Math.round(
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
    const mistica =
      Math.max(
        getFinalStat(Characteristics.RAZON),
        getFinalStat(Characteristics.INTUICION),
        getFinalStat(Characteristics.SABIDURIA)
      ) +
      Math.round(
        [
          getFinalStat(Characteristics.RAZON),
          getFinalStat(Characteristics.INTUICION),
          getFinalStat(Characteristics.SABIDURIA),
        ].sort((a, b) => b - a)[1] / 2
      );

    setDerivative({
      golpe,
      golpe2m,
      maxTA,
      reflejos,
      reFisica,
      reMagica,
      reMental,
      magicTA,
      mistica,
    });
  };

  const resetStats = () => {
    dispatch({
      type: CharacterAction.RESET_STATS,
      payload: null,
    });
  };

  useEffect(() => {
    calculateDerivativeStats();
  }, [state]);

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2 bg-stone-950 sticky top-0">
        <div className="text-white">
          <KromsysLogo />
        </div>
        <div>
          <h1 className="text-sm">Kromsys Character Creator</h1>
        </div>
        <div className="text-white">
          <FlagButton toggleFn={setLang} currentValue={choosenLang} />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4 space-y-4 overflow-y-auto mb-10">
        {!state.showResults ? (
          <InputPage
            state={state}
            choosenLang={choosenLang}
            dispatch={dispatch}
            sumOfStats={sumOfStats}
            getModifiersForCurrentSpecies={getModifiersForCurrentSpecies}
          />
        ) : (
          <ResultsPage
            state={state}
            choosenLang={choosenLang}
            derivative={derivative}
            getModifiersForCurrentSpecies={getModifiersForCurrentSpecies}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-stone-950 py-4 px-4 flex justify-center sticky bottom-0">
        {!state.showResults ? (
          <>
            <button
              className="w-1/2 px-4 py-2 text-white text-sm mr-4"
              onClick={resetStats}
            >
              {["Limpiar Puntos", "Reset Points"][choosenLang]}
            </button>
            <button
              disabled={sumOfStats !== state.sumLimit}
              className="w-1/2 px-4 py-2 text-white disabled:opacity-50 text-sm"
              onClick={() => {
                if (sumOfStats === state.sumLimit) {
                  changeResults(!state.showResults);
                }
              }}
            >
              {["Generar!", "Generate!"][choosenLang]}
            </button>
          </>
        ) : (
          <>
            <button
              className="w-1/2 px-4 py-2 text-white text-sm mr-4"
              onClick={() => {
                changeResults(!state.showResults);
              }}
            >
              {["< Volver", "< Go Back"][choosenLang]}
            </button>
            <button
              className="w-1/2 px-4 py-2 text-white text-sm"
              onClick={() => {
                resetStats();
                changeResults(!state.showResults);
              }}
            >
              {["Empezar de cero", "Start over"][choosenLang]}
            </button>
          </>
        )}
      </footer>
    </div>
  );
}

export default App;
