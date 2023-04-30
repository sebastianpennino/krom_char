import { Dropdown } from "../components/Dropdown";
import { NumericInput } from "../components/NumericInput";
import { TextInput } from "../components/TextInput";
import {
  species,
  classes,
  subclasses,
  PlayerClasses,
  characteristicsToName,
  Characteristics,
} from "../types/types";

type Props = {
  state: any;
  choosenLang: number;
  sumOfStats: any;
  dispatch: any;
  getModifiersForCurrentSpecies: any;
};

// The input page lets you make choices to create the character
export const InputPage = ({
  state,
  choosenLang,
  sumOfStats,
  dispatch,
  getModifiersForCurrentSpecies,
}: Props) => {
  const sumLimit = state.sumLimit;

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

  return (
    <>
      <div>
        <TextInput
          chosenLang={choosenLang}
          value={state.charName}
          disabled={true}
        />
      </div>
      <div className="flex space-x-4">
        <div className="w-1/3">
          <Dropdown
            title={["Especie", "Species"]}
            options={species}
            chosenLang={choosenLang}
            changeFn={changeSpecies}
            selection={state.charSpecies}
            disabled={state.showResults}
          />
        </div>
        <div className="w-1/3">
          <Dropdown
            title={["Clase", "Class"]}
            options={classes}
            chosenLang={choosenLang}
            changeFn={changeClass}
            selection={state.charClass}
            disabled={state.showResults}
          />
        </div>
        <div className="w-1/3">
          <Dropdown
            title={["Sub-Clase", "Sub-Class"]}
            options={subclasses}
            chosenLang={choosenLang}
            filterFn={(opt: any) => {
              return (
                opt.dependsOn === (state.charClass || PlayerClasses.ASESINO)
              );
            }}
            changeFn={changeSubClass}
            selection={state.charSubClass}
            disabled={state.showResults}
          />
        </div>
      </div>

      <div>
        <label htmlFor="limit">
          {
            ["Limite de caracteristicas", "Point limit for characteristics"][
              choosenLang
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
      <div className="grid grid-cols-3 gap-4">
        {Object.entries(state.charStats).map(([key, val]: any) => {
          return (
            <NumericInput
              key={key}
              title={characteristicsToName[key][choosenLang]}
              unique={key}
              changeFn={changeStats}
              value={val}
              mod={getModifiersForCurrentSpecies()[key]}
              min={getModifiersForCurrentSpecies()[key] < 0 ? 2 : 1}
              isUnder={val + getModifiersForCurrentSpecies()[key] <= 0}
              disabled={true}
            />
          );
        })}
      </div>
      <div className="flex justify-center mt-4">
        <span>
          ({["Puntos Restantes: ", "Remaining Points: "][choosenLang]}
          {/* @ts-ignore */}
          {state.sumLimit -
            Object.entries(state.charStats).reduce((acc, stat) => {
              // @ts-ignore
              return (acc + stat[1]) as number;
            }, 0)}
          )
        </span>
      </div>
    </>
  );
};
