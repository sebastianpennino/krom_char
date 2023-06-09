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
  (typeof PlayerClasses)[keyof typeof PlayerClasses];

export const classStat: Record<
  ValidPlayerClasses,
  { v: number; m: number; a: number }
> = {
  [PlayerClasses.ASESINO]: { v: 15, m: -10, a: 40 },
  [PlayerClasses.LADRON]: { v: -15, m: 0, a: 60 },
  [PlayerClasses.GUERRERO]: { v: 30, m: -25, a: 40 },
  [PlayerClasses.MONJE]: { v: 25, m: 10, a: 10 },
  [PlayerClasses.CAZADOR]: { v: 5, m: 20, a: 20 },
  [PlayerClasses.MAGO_GUERRERO]: { v: 20, m: 20, a: 5 },
  [PlayerClasses.SHAMAN]: { v: -15, m: 40, a: 20 },
  [PlayerClasses.MAGO]: { v: -25, m: 60, a: 10 },
};

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

export type ValidPlayerSubClasses =
  (typeof PlayerSubClasses)[keyof typeof PlayerSubClasses];

export type Subclass = {
  name: string[];
  formulaName: ValidPlayerSubClasses;
  dependsOn: ValidPlayerClasses;
};

export const subclasses: Subclass[] = [
  {
    dependsOn: PlayerClasses.ASESINO,
    formulaName: PlayerSubClasses.SICARIO,
    name: ["Sicario", "Hitman"],
  },
  {
    dependsOn: PlayerClasses.ASESINO,
    formulaName: PlayerSubClasses.ESPIA,
    name: ["Espia", "Spy"],
  },

  {
    dependsOn: PlayerClasses.LADRON,
    formulaName: PlayerSubClasses.PICARO,
    name: ["Picaro", "Rogue"],
  },
  {
    dependsOn: PlayerClasses.LADRON,
    formulaName: PlayerSubClasses.PIRATA,
    name: ["Pirata", "Pirate"],
  },
  {
    dependsOn: PlayerClasses.LADRON,
    formulaName: PlayerSubClasses.ESCAPISTA,
    name: ["Escapista", "Escape Artist"],
  },

  {
    dependsOn: PlayerClasses.GUERRERO,
    formulaName: PlayerSubClasses.LUCHADOR,
    name: ["Luchador", "Fighter"],
  },
  {
    dependsOn: PlayerClasses.GUERRERO,
    formulaName: PlayerSubClasses.BARBARO,
    name: ["Barbaro", "Berserker"],
  },
  {
    dependsOn: PlayerClasses.GUERRERO,
    formulaName: PlayerSubClasses.CABALLERO,
    name: ["Caballero", "Knight"],
  },

  {
    dependsOn: PlayerClasses.MONJE,
    formulaName: PlayerSubClasses.MARCIAL,
    name: ["Marcial", "Martial Artist"],
  },
  {
    dependsOn: PlayerClasses.MONJE,
    formulaName: PlayerSubClasses.SANADOR,
    name: ["Sanador", "Healer"],
  },

  {
    dependsOn: PlayerClasses.CAZADOR,
    formulaName: PlayerSubClasses.EXPLORADOR,
    name: ["Explorador", "Explorer"],
  },
  {
    dependsOn: PlayerClasses.CAZADOR,
    formulaName: PlayerSubClasses.MONTARAZ,
    name: ["Montaraz", "Ranger"],
  },

  {
    dependsOn: PlayerClasses.MAGO_GUERRERO,
    formulaName: PlayerSubClasses.PALADIN,
    name: ["Paladin", "Paladin"],
  },
  {
    dependsOn: PlayerClasses.MAGO_GUERRERO,
    formulaName: PlayerSubClasses.SUPLICANTE_OSCURO,
    name: ["Suplicante Oscuro", "Dark Acolyte"],
  },
  {
    dependsOn: PlayerClasses.MAGO_GUERRERO,
    formulaName: PlayerSubClasses.CAZAMAGOS,
    name: ["Cazamagos", "Spellbreaker"],
  },
  {
    dependsOn: PlayerClasses.MAGO_GUERRERO,
    formulaName: PlayerSubClasses.ALQUIMISTA,
    name: ["Alquimista", "Alchemist"],
  },

  {
    dependsOn: PlayerClasses.SHAMAN,
    formulaName: PlayerSubClasses.BRUJO,
    name: ["Brujo", "Warlock"],
  },
  {
    dependsOn: PlayerClasses.SHAMAN,
    formulaName: PlayerSubClasses.CLERIGO,
    name: ["Clerigo", "Cleric"],
  },
  {
    dependsOn: PlayerClasses.SHAMAN,
    formulaName: PlayerSubClasses.DRUIDA,
    name: ["Druida", "Druid"],
  },
  {
    dependsOn: PlayerClasses.SHAMAN,
    formulaName: PlayerSubClasses.DEVASTADOR,
    name: ["Devastador", "Bligther"],
  },

  {
    dependsOn: PlayerClasses.MAGO,
    formulaName: PlayerSubClasses.NIGROMANTE,
    name: ["Nigromante", "Necromancer"],
  },
  {
    dependsOn: PlayerClasses.MAGO,
    formulaName: PlayerSubClasses.MAGO_VERDE,
    name: ["Mago Verde", "Verdant Mage"],
  },
  {
    dependsOn: PlayerClasses.MAGO,
    formulaName: PlayerSubClasses.MAGO_ELEMENTAL,
    name: ["Mago Elemental", "Elemental Mage"],
  },
  {
    dependsOn: PlayerClasses.MAGO,
    formulaName: PlayerSubClasses.PSIQUICO,
    name: ["Psiquico", "Mentalist"],
  },
];

export const translateSubclass = (formulaName: ValidPlayerSubClasses, idx: number) => {
  return subclasses.find(c => c.formulaName === formulaName)?.name[idx]
}

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

export const translateClass = (formulaName: ValidPlayerClasses, idx: number) => {
  return classes.find(c => c.formulaName === formulaName)?.name[idx]
}

export const selectFirstSubClass = (playerClass: ValidPlayerClasses) => {
  return subclasses.find((subClass) => {
    return subClass.dependsOn === playerClass;
  })?.formulaName;
};
