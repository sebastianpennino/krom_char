import { Characteristics } from "./Characteristics";

export enum PlayerSpecies {
  TANQUE = "TANQUE",
  ORCO = "ORCO",
  FERAL = "FERAL",
  HUMANO = "HUMANO",
  TRENO = "TRENO",
  ELFO = "ELFO",
  FEY = "FEY",
}

export type ValidPlayerSpecies =
  (typeof PlayerSpecies)[keyof typeof PlayerSpecies];

type SpeciesStats = {
  v: number;
  m: number;
  a: number;
  mods: {
    [Characteristics.FUERZA]: -1 | 0 | 1;
    [Characteristics.RESISTENCIA]: -1 | 0 | 1;
    [Characteristics.AGILIDAD]: -1 | 0 | 1;
    [Characteristics.RAZON]: -1 | 0 | 1;
    [Characteristics.INTUICION]: -1 | 0 | 1;
    [Characteristics.SABIDURIA]: -1 | 0 | 1;
    [Characteristics.SOCIAL]: -1 | 0 | 1;
    [Characteristics.PERCEPCION]: -1 | 0 | 1;
    [Characteristics.VOLUNTAD]: -1 | 0 | 1;
  };
};

export const speciesStat: Record<ValidPlayerSpecies, SpeciesStats> = {
  [PlayerSpecies.TANQUE]: {
    v: 115,
    m: 60,
    a: 75,
    mods: {
      [Characteristics.FUERZA]: 1,
      [Characteristics.RESISTENCIA]: 1,
      [Characteristics.AGILIDAD]: -1,
      [Characteristics.RAZON]: 0,
      [Characteristics.INTUICION]: -1,
      [Characteristics.SABIDURIA]: 0,
      [Characteristics.SOCIAL]: 0,
      [Characteristics.PERCEPCION]: 0,
      [Characteristics.VOLUNTAD]: 1,
    },
  },
  [PlayerSpecies.ORCO]: {
    v: 90,
    m: 70,
    a: 90,
    mods: {
      [Characteristics.FUERZA]: 1,
      [Characteristics.RESISTENCIA]: 0,
      [Characteristics.AGILIDAD]: 0,
      [Characteristics.RAZON]: -1,
      [Characteristics.INTUICION]: 0,
      [Characteristics.SABIDURIA]: 0,
      [Characteristics.SOCIAL]: 0,
      [Characteristics.PERCEPCION]: 1,
      [Characteristics.VOLUNTAD]: 0,
    },
  },
  [PlayerSpecies.FERAL]: {
    v: 75,
    m: 60,
    a: 115,
    mods: {
      [Characteristics.FUERZA]: 0,
      [Characteristics.RESISTENCIA]: 1,
      [Characteristics.AGILIDAD]: 1,
      [Characteristics.RAZON]: -1,
      [Characteristics.INTUICION]: 0,
      [Characteristics.SABIDURIA]: -1,
      [Characteristics.SOCIAL]: 0,
      [Characteristics.PERCEPCION]: 1,
      [Characteristics.VOLUNTAD]: 0,
    },
  },
  [PlayerSpecies.HUMANO]: {
    v: 75,
    m: 90,
    a: 85,
    mods: {
      [Characteristics.FUERZA]: 0,
      [Characteristics.RESISTENCIA]: 0,
      [Characteristics.AGILIDAD]: 0,
      [Characteristics.RAZON]: 1,
      [Characteristics.INTUICION]: 0,
      [Characteristics.SABIDURIA]: 0,
      [Characteristics.SOCIAL]: 1,
      [Characteristics.PERCEPCION]: 0,
      [Characteristics.VOLUNTAD]: 0,
    },
  },
  [PlayerSpecies.TRENO]: {
    v: 60,
    m: 90,
    a: 100,
    mods: {
      [Characteristics.FUERZA]: 0,
      [Characteristics.RESISTENCIA]: 0,
      [Characteristics.AGILIDAD]: 1,
      [Characteristics.RAZON]: 1,
      [Characteristics.INTUICION]: 1,
      [Characteristics.SABIDURIA]: 0,
      [Characteristics.SOCIAL]: 0,
      [Characteristics.PERCEPCION]: -1,
      [Characteristics.VOLUNTAD]: 0,
    },
  },
  [PlayerSpecies.ELFO]: {
    v: 65,
    m: 110,
    a: 75,
    mods: {
      [Characteristics.FUERZA]: 0,
      [Characteristics.RESISTENCIA]: -1,
      [Characteristics.AGILIDAD]: 0,
      [Characteristics.RAZON]: 0,
      [Characteristics.INTUICION]: 0,
      [Characteristics.SABIDURIA]: 1,
      [Characteristics.SOCIAL]: 0,
      [Characteristics.PERCEPCION]: 1,
      [Characteristics.VOLUNTAD]: 0,
    },
  },
  [PlayerSpecies.FEY]: {
    v: 50,
    m: 140,
    a: 60,
    mods: {
      [Characteristics.FUERZA]: -1,
      [Characteristics.RESISTENCIA]: -1,
      [Characteristics.AGILIDAD]: 0,
      [Characteristics.RAZON]: 1,
      [Characteristics.INTUICION]: 0,
      [Characteristics.SABIDURIA]: 1,
      [Characteristics.SOCIAL]: 0,
      [Characteristics.PERCEPCION]: 0,
      [Characteristics.VOLUNTAD]: 1,
    },
  },
};

export const species = [
  {
    name: ["Volkari", "Volkari"],
    formulaName: PlayerSpecies.TANQUE,
  },
  {
    name: ["Orco", "Orc"],
    formulaName: PlayerSpecies.ORCO,
  },
  {
    name: ["Feral", "Feral"],
    formulaName: PlayerSpecies.FERAL,
  },
  {
    name: ["Humano", "Human"],
    formulaName: PlayerSpecies.HUMANO,
  },
  {
    name: ["Treno", "Treno"],
    formulaName: PlayerSpecies.TRENO,
  },
  {
    name: ["Elfo", "Elf"],
    formulaName: PlayerSpecies.ELFO,
  },
  {
    name: ["Drakkars", "Drakkars"],
    formulaName: PlayerSpecies.FEY,
  },
];

export const translateSpecies = (formulaName: ValidPlayerSpecies, idx: number) => {
  return species.find(c => c.formulaName === formulaName)?.name[idx]
}
