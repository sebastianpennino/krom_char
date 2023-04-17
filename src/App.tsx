import { useReducer } from "react";
import { Dropdown } from "./components/Dropdown";
import { NumericInput } from "./components/NumericInput";
import { TextInput } from "./components/TextInput";
import {
  species,
  classes,
  subclasses,
  PlayerClasses,
  characteristics,
  Characteristics,
  selectFirstSubClass,
  PlayerSpecies,
  PlayerSubClasses,
} from "./types/types";
import { getRandomCharacterName } from "./utils";

const langs = {
  esp: 0,
  eng: 1,
};

const chosenLanguage = langs.esp;

const initialState = {
  charSpecies: PlayerSpecies.TANQUE,
  charClass: PlayerClasses.ASESINO,
  charSubClass: PlayerSubClasses.SICARIO,
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
};

// @ts-ignore
function reducer(state, action) {
  console.log("Reducer!");
  switch (action.type) {
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
    case "CHANGE_STAT": {
      return {
        ...state,
        charStats: action.payload,
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
  const changeStats = (newValue: any) => {
    dispatch({
      type: "CHANGE_STAT",
      payload: newValue,
    });
  };

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
          <pre>{JSON.stringify(state, null, 2)}</pre>
        </small>
        */}

        <div className="flex space-x-4">
          <div className="w-1/3">
            <Dropdown
              title={["Especie", "Species"]}
              options={species}
              chosenLang={chosenLanguage}
              changeFn={changeSpecies}
            />
          </div>
          <div className="w-1/3">
            <Dropdown
              title={["Clase", "Class"]}
              options={classes}
              chosenLang={chosenLanguage}
              changeFn={changeClass}
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
            />
          </div>
        </div>
        <div>
          <TextInput
            chosenLang={chosenLanguage}
            initialValue={state.charName}
          />
        </div>
        <div>
          <label htmlFor="dropdown4">Dropdown 4</label>
          <select id="dropdown4" className="block w-full mt-1">
            <option value="32">32</option>
            <option value="28">28</option>
            <option value="26">26</option>
            <option value="24">24</option>
            <option value="22">22</option>
            <option value="20">20</option>
          </select>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {characteristics.map((char) => {
            return (
              <NumericInput
                key={char.formulaName}
                title={char.name[chosenLanguage]}
                unique={char.formulaName}
                changeFn={changeStats}
              />
            );
          })}
        </div>
        <div className="flex justify-center mt-4">
          <button className="w-full px-4 py-2 text-white rounded">
            Calculate
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-center px-4 py-3 text-gray-500 bg-gray-200">
        <div className="text-sm">© 2023 All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
