import { useEffect, useState } from "react";
import { Dropdown } from "../components/Dropdown";
import { NumericInput } from "../components/NumericInput";
import { TextInput } from "../components/TextInput";
import { CharacterAction } from "../reducers/characterReducer";
import { characteristicsToName, ValidCharacteristics } from "../typings/Characteristics";
import { classes, subclasses, PlayerClasses } from "../typings/Classes";
import { calculateSKillpackValue, allSkillPacks } from "../typings/SkillPacks";
import { species } from "../typings/Species";

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

  const changeSkillpack = (newValue: any) => {
    dispatch({
      type: CharacterAction.SELECT_SKILLPACK,
      payload: newValue,
    });
  };
  const changeSpecies = (newValue: any) => {
    dispatch({
      type: CharacterAction.SELECT_SPECIES,
      payload: newValue,
    });
  };
  const changeClass = (newValue: any) => {
    dispatch({
      type: CharacterAction.SELECT_CLASS,
      payload: newValue,
    });
  };
  const changeSubClass = (newValue: any) => {
    dispatch({
      type: CharacterAction.SELECT_SUB_CLASS,
      payload: newValue,
    });
  };

  const changeStats = (newValue: any, statName: string) => {
    if (sumOfStats < sumLimit) {
      if (newValue === "inc") {
        return dispatch({
          type: CharacterAction.INCREASE_STAT,
          payload: statName,
        });
      }
    }
    if (newValue === "dec") {
      return dispatch({
        type: CharacterAction.DECREASE_STAT,
        payload: statName,
      });
    }
    if (typeof newValue === "number") {
      return dispatch({
        type: CharacterAction.CHANGE_STAT,
        payload: { val: newValue, statName },
      });
    }
  };

  const [calcValue, setCalcValue] = useState([0, 0]);

  useEffect(() => {
    setCalcValue(calculateSKillpackValue(state.charSkillPack));
  }, [state.charSkillPack]);

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
                opt.dependsOn === (state.charClass || PlayerClasses.RUFIAN)
              );
            }}
            changeFn={changeSubClass}
            selection={state.charSubClass}
            disabled={state.showResults}
          />
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="w-1/2">
          <Dropdown
            title={[
              `Skillpack (${calcValue[1]})`,
              `Skillpack (${calcValue[1]})`,
            ]}
            options={allSkillPacks}
            chosenLang={choosenLang}
            changeFn={changeSkillpack}
            selection={state.charSkillPack}
            disabled={false}
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="limit">
            {["Puntos Max.", "Max. Points"][choosenLang]}
          </label>
          <select
            id="limit"
            className="block w-full mt-1"
            onChange={(e) => {
              dispatch({
                type: CharacterAction.CHANGE_LIMIT,
                payload: parseInt(e.target.value, 10) || 20,
              });
            }}
            defaultValue={state.sumLimit}
          >
            <option value="45">Max</option>
            <option value="32">32</option>
            <option value="28">28</option>
            <option value="25">25</option>
            <option value="22">22</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {Object.entries(state.charStats).map(([key, val]: any) => {
          return (
            <NumericInput
              key={key}
              title={
                characteristicsToName[key as ValidCharacteristics][choosenLang]
              }
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
          {state.sumLimit -
            Object.entries(state.charStats).reduce((acc, stat) => {
              return acc + (stat[1] as unknown as number);
            }, 0)}
          )
        </span>
      </div>

      <div className="h-15 w-full bg-transparent"></div>
    </>
  );
};
