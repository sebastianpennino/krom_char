import { PlayerSpecies } from "./types/types";
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
