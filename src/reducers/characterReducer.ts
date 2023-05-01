import { AppState, initialState } from "../App";
import { ValidCharacteristics } from "../types/Characteristics";
import { selectFirstSubClass } from "../types/Classes";
import { getRandomCharacterName } from "../utils";

export enum CharacterAction {
  CHANGE_LIMIT = "CHANGE_LIMIT",
  SELECT_SKILLPACK = "SELECT_SKILLPACK",
  SELECT_SPECIES = "SELECT_SPECIES",
  SELECT_CLASS = "SELECT_CLASS",
  SELECT_SUB_CLASS = "SELECT_SUB_CLASS",
  RESET_STATS = "RESET_STATS",
  INCREASE_STAT = "INCREASE_STAT",
  DECREASE_STAT = "DECREASE_STAT",
  CHANGE_STAT = "CHANGE_STAT",
  CHANGE_NAME = "CHANGE_NAME",
  TOGGLE_RESULTS = "TOGGLE_RESULTS",
}

export type ValidCharacterAction =
  (typeof CharacterAction)[keyof typeof CharacterAction];

export type AppAction = {
  type: ValidCharacterAction;
  payload: any;
};

export function characterReducer(state: AppState, action: AppAction) {
  switch (action.type) {
    case CharacterAction.CHANGE_LIMIT: {
      return {
        ...state,
        sumLimit: action.payload,
      };
    }
    case CharacterAction.SELECT_SKILLPACK: {
      return {
        ...state,
        charSkillPack: action.payload,
      };
    }
    case CharacterAction.SELECT_SPECIES: {
      return {
        ...state,
        charName: getRandomCharacterName(action.payload),
        charSpecies: action.payload,
      };
    }
    case CharacterAction.SELECT_CLASS: {
      return {
        ...state,
        charClass: action.payload,
        charSubClass: selectFirstSubClass(action.payload),
      };
    }
    case CharacterAction.SELECT_SUB_CLASS: {
      return {
        ...state,
        charSubClass: action.payload,
      };
    }
    case CharacterAction.RESET_STATS: {
      return {
        ...state,
        charStats: { ...initialState.charStats },
      };
    }
    case CharacterAction.INCREASE_STAT: {
      const charName = action.payload as unknown as ValidCharacteristics;
      const newStats = {
        ...state.charStats,
        [action.payload]: state.charStats[charName] + 1,
      };
      return {
        ...state,
        charStats: newStats,
      };
    }
    case CharacterAction.DECREASE_STAT: {
      const charName = action.payload as unknown as ValidCharacteristics;
      const newStats = {
        ...state.charStats,
        [action.payload]: state.charStats[charName] - 1,
      };
      return {
        ...state,
        charStats: newStats,
      };
    }
    case CharacterAction.CHANGE_STAT: {
      const charStats = {
        ...state.charStats,
        [action.payload.statName]: action.payload.val,
      };
      return {
        ...state,
        charStats,
      };
    }
    case CharacterAction.CHANGE_NAME: {
      return {
        ...state,
        charName: action.payload,
      };
    }
    case CharacterAction.TOGGLE_RESULTS: {
      return {
        ...state,
        showResults: action.payload,
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}
