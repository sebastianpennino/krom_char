import { PlayerSpecies } from "./typings/Species";
import {
  genericNames,
  elfNames,
  orcNames,
  humanNames,
  feyNames,
  tritonNames,
  graniteNames,
  wolfmanNames,
} from "./utils/names";

export function toCamelCase(phrase: string): string {
  return phrase
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
}

export function removeNonLetters(text: string): string {
  return String(text).replace(/[^a-zA-Z]+/g, "");
}

export function removeNonLettersHyphensUnderscores(text: string): string {
  return String(text).replace(/[^a-zA-Z-_]+/g, "");
}

export function getRandomCharacterName(species = ""): string {
  let nameList = genericNames;

  switch (species) {
    case PlayerSpecies.HUMANO:
      nameList = [...humanNames];
      break;
    case PlayerSpecies.ELFO:
      nameList = [...elfNames];
      break;
    case PlayerSpecies.FERAL:
      nameList = [...wolfmanNames];
      break;
    case PlayerSpecies.FEY:
      nameList = [...feyNames];
      break;
    case PlayerSpecies.ORCO:
      nameList = [...orcNames];
      break;
    case PlayerSpecies.TANQUE:
      nameList = [...graniteNames];
      break;
    case PlayerSpecies.TRENO:
      nameList = [...tritonNames];
      break;
    default:
      nameList = [...genericNames];
  }

  return nameList[Math.floor(Math.random() * nameList.length)];
}

export const calculateFormula = (
  formula: string,
  values: Record<string, number>,
  round?: boolean
): number => {
  // Replace each variable in the formula with its corresponding value
  const replacedFormula = formula.replace(/[A-Za-z]+/g, (match) => {
    const variable = match.trim();
    if (values.hasOwnProperty(variable)) {
      return values[variable].toString();
    }
    return match; // If the variable is not found, leave it unchanged
  });

  try {
    // Evaluate the formula using eval()
    const result = eval(replacedFormula);
    if (typeof result === "number" && !isNaN(result)) {
      if (round) {
        return Math.round(result);
      }
      return result;
    }
  } catch (error) {
    // Handle any errors that occur during evaluation
    console.error("Error evaluating the formula:", error);
  }

  return -1; // Return -1 if the formula is invalid or the evaluation fails
};
