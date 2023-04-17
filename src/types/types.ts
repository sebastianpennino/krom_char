export enum Characteristics {
  FUERZA = "Fu",
  RESISTENCIA = "Re",
  AGILIDAD = "Ag",
  RAZON = "Ra",
  INTUICION = "Intu",
  SABIDURIA = "Sab",
  SOCIAL = "Soc",
  PERCEPCION = "Per",
  VOLUNTAD = "Vo",
}

export type ValidCharacteristics =
  | Characteristics.FUERZA
  | Characteristics.RESISTENCIA
  | Characteristics.AGILIDAD
  | Characteristics.RAZON
  | Characteristics.INTUICION
  | Characteristics.SABIDURIA
  | Characteristics.SOCIAL
  | Characteristics.PERCEPCION
  | Characteristics.VOLUNTAD;

export const characteristics = [
  {
    name: ["Fuerza", "Strength"],
    formulaName: Characteristics.FUERZA,
  },
  {
    name: ["Resistencia", "Fortitude"],
    formulaName: Characteristics.RESISTENCIA,
  },
  {
    name: ["Agilidad", "Agility"],
    formulaName: Characteristics.AGILIDAD,
  },
  {
    name: ["Razon", "Reasoning"],
    formulaName: Characteristics.RAZON,
  },
  {
    name: ["Intuicion", "Intuition"],
    formulaName: Characteristics.INTUICION,
  },
  {
    name: ["Sabiduria", "Knowledge"],
    formulaName: Characteristics.SABIDURIA,
  },
  {
    name: ["Social", "Social"],
    formulaName: Characteristics.SOCIAL,
  },
  {
    name: ["Percepcion", "Perception"],
    formulaName: Characteristics.PERCEPCION,
  },
  {
    name: ["Voluntad", "Willpower"],
    formulaName: Characteristics.VOLUNTAD,
  },
];

export enum PlayerClasses {
  ASESINO = "ASESINO",
  LADRON = "LADRON",
  GUERRERO = "GUERRERO",
  MONJE = "MONJE",
  CAZADOR = "CAZADOR",
  MAGO_GUERRERO = "MAGO_GUERRERO",
  SHAMAN = "SHAMAN",
  MAGO = "MAGO",
}

export type ValidPlayerClasses =
  | PlayerClasses.ASESINO
  | PlayerClasses.LADRON
  | PlayerClasses.GUERRERO
  | PlayerClasses.MONJE
  | PlayerClasses.CAZADOR
  | PlayerClasses.MAGO_GUERRERO
  | PlayerClasses.SHAMAN
  | PlayerClasses.MAGO;

export enum PlayerSpecies {
  TANQUE = "TANQUE",
  ORCO = "ORCO",
  FERAL = "FERAL",
  HUMANO = "HUMANO",
  TRENO = "TRENO",
  ELFO = "ELFO",
  FEY = "FEY",
}

export type ValidSpecies =
  | PlayerSpecies.TANQUE
  | PlayerSpecies.ORCO
  | PlayerSpecies.FERAL
  | PlayerSpecies.HUMANO
  | PlayerSpecies.TRENO
  | PlayerSpecies.ELFO
  | PlayerSpecies.FEY;

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

const speciesStat: Record<ValidSpecies, SpeciesStats> = {
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
    name: ["Tanque", "Tank-esque"],
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
    name: ["Magica Full", "Magic Full"],
    formulaName: PlayerSpecies.FEY,
  },
];

export enum PlayerSubClasses {
  SICARIO = "SICARIO",
  ESPIA = "ESPIA",
  PICARO = "PICARO",
  PIRATA = "PIRATA",
  ESCAPISTA = "ESCAPISTA",
  LUCHADOR = "LUCHADOR",
  BARBARO = "BARBARO",
  CABALLERO = "CABALLERO",
  MARCIAL = "MARCIAL",
  SANADOR = "SANADOR",
  EXPLORADOR = "EXPLORADOR",
  MONTARAZ = "MONTARAZ",
  PALADIN = "PALADIN",
  SUPLICANTE_OSCURO = "SUPLICANTE",
  CAZAMAGOS = "CAZAMAGOS",
  ALQUIMISTA = "ALQUIMISTA",
  BRUJO = "BRUJO",
  CLERIGO = "CLERIGO",
  DRUIDA = "DRUIDA",
  DEVASTADOR = "DEVASTADOR",
  NIGROMANTE = "NIGROMANTE",
  MAGO_VERDE = "MAGO_VERDE",
  MAGO_ELEMENTAL = "MAGO_ELEMENTAL",
  PSIQUICO = "PSIQUICO",
}

type ValidPlayerSubClasses =
  typeof PlayerSubClasses[keyof typeof PlayerSubClasses];

type Subclass = {
  name: string[];
  formulaName: ValidPlayerSubClasses;
  dependsOn: ValidPlayerClasses;
};

export const subclasses: Subclass[] = [
  {
    dependsOn: PlayerClasses.ASESINO,
    formulaName: PlayerSubClasses.SICARIO,
    name: ["Sicario", "-Sicario"],
  },
  {
    dependsOn: PlayerClasses.ASESINO,
    formulaName: PlayerSubClasses.ESPIA,
    name: ["Espia", "-Espia"],
  },

  {
    dependsOn: PlayerClasses.LADRON,
    formulaName: PlayerSubClasses.PICARO,
    name: ["Picaro", "-Picaro"],
  },
  {
    dependsOn: PlayerClasses.LADRON,
    formulaName: PlayerSubClasses.PIRATA,
    name: ["Pirata", "-Pirata"],
  },
  {
    dependsOn: PlayerClasses.LADRON,
    formulaName: PlayerSubClasses.ESCAPISTA,
    name: ["Escapita", "-Escapita"],
  },

  {
    dependsOn: PlayerClasses.GUERRERO,
    formulaName: PlayerSubClasses.LUCHADOR,
    name: ["Luchador", "-Luchador"],
  },
  {
    dependsOn: PlayerClasses.GUERRERO,
    formulaName: PlayerSubClasses.BARBARO,
    name: ["Barbaro", "-Barbaro"],
  },
  {
    dependsOn: PlayerClasses.GUERRERO,
    formulaName: PlayerSubClasses.CABALLERO,
    name: ["Caballero", "-Caballero"],
  },

  {
    dependsOn: PlayerClasses.MONJE,
    formulaName: PlayerSubClasses.MARCIAL,
    name: ["Marcial", "-Marcial"],
  },
  {
    dependsOn: PlayerClasses.MONJE,
    formulaName: PlayerSubClasses.SANADOR,
    name: ["Sanador", "-Sanador"],
  },

  {
    dependsOn: PlayerClasses.CAZADOR,
    formulaName: PlayerSubClasses.EXPLORADOR,
    name: ["Explorador", "-Explorador"],
  },
  {
    dependsOn: PlayerClasses.CAZADOR,
    formulaName: PlayerSubClasses.MONTARAZ,
    name: ["Montaraz", "-Montaraz"],
  },

  {
    dependsOn: PlayerClasses.MAGO_GUERRERO,
    formulaName: PlayerSubClasses.PALADIN,
    name: ["Paladin", "-Paladin"],
  },
  {
    dependsOn: PlayerClasses.MAGO_GUERRERO,
    formulaName: PlayerSubClasses.SUPLICANTE_OSCURO,
    name: ["Suplicante Oscuro", "-Suplicante Oscuro"],
  },
  {
    dependsOn: PlayerClasses.MAGO_GUERRERO,
    formulaName: PlayerSubClasses.CAZAMAGOS,
    name: ["Cazamagos", "-Cazamagos"],
  },
  {
    dependsOn: PlayerClasses.MAGO_GUERRERO,
    formulaName: PlayerSubClasses.ALQUIMISTA,
    name: ["Alquimista", "-Alquimista"],
  },

  {
    dependsOn: PlayerClasses.SHAMAN,
    formulaName: PlayerSubClasses.BRUJO,
    name: ["Brujo", "-Brujo"],
  },
  {
    dependsOn: PlayerClasses.SHAMAN,
    formulaName: PlayerSubClasses.CLERIGO,
    name: ["Clerigo", "-Clerigo"],
  },
  {
    dependsOn: PlayerClasses.SHAMAN,
    formulaName: PlayerSubClasses.DRUIDA,
    name: ["Druida", "-Druida"],
  },
  {
    dependsOn: PlayerClasses.SHAMAN,
    formulaName: PlayerSubClasses.DEVASTADOR,
    name: ["Devastador", "-Devastador"],
  },

  {
    dependsOn: PlayerClasses.MAGO,
    formulaName: PlayerSubClasses.NIGROMANTE,
    name: ["Nigromante", "-Nigromante"],
  },
  {
    dependsOn: PlayerClasses.MAGO,
    formulaName: PlayerSubClasses.MAGO_VERDE,
    name: ["Mago Verde", "-Mago Verde"],
  },
  {
    dependsOn: PlayerClasses.MAGO,
    formulaName: PlayerSubClasses.MAGO_ELEMENTAL,
    name: ["Mago Elemental", "-Mago Elemental"],
  },
  {
    dependsOn: PlayerClasses.MAGO,
    formulaName: PlayerSubClasses.PSIQUICO,
    name: ["Psiquico", "-Psiquico"],
  },
];

export const classes = [
  {
    name: ["Asesino", "Assasin"],
    formulaName: PlayerClasses.ASESINO,
  },
  {
    name: ["Ladron", "Thief"],
    formulaName: PlayerClasses.LADRON,
  },
  {
    name: ["Guerrero", "Warrior"],
    formulaName: PlayerClasses.GUERRERO,
  },
  {
    name: ["Monje", "Monk"],
    formulaName: PlayerClasses.MONJE,
  },
  {
    name: ["Cazador", "Hunter"],
    formulaName: PlayerClasses.CAZADOR,
  },
  {
    name: ["M-Guerrero", "W-Mage"],
    formulaName: PlayerClasses.MAGO_GUERRERO,
  },
  {
    name: ["Shaman", "Shaman"],
    formulaName: PlayerClasses.SHAMAN,
  },
  {
    name: ["Mago", "Mage"],
    formulaName: PlayerClasses.MAGO,
  },
];
