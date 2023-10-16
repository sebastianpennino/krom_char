export enum PlayerClasses {
  RUFIAN = "RUFIAN",
  GUERRERO = "GUERRERO",
  MONJE = "MONJE",
  EXPLORADOR = "EXPLORADOR",
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
  [PlayerClasses.RUFIAN]: { v: -5, m: 0, a: 50 },
  [PlayerClasses.GUERRERO]: { v: 30, m: -25, a: 40 },
  [PlayerClasses.MONJE]: { v: 25, m: 10, a: 10 },
  [PlayerClasses.EXPLORADOR]: { v: 5, m: 20, a: 20 },
  [PlayerClasses.MAGO_GUERRERO]: { v: 20, m: 20, a: 5 },
  [PlayerClasses.SHAMAN]: { v: -15, m: 40, a: 20 },
  [PlayerClasses.MAGO]: { v: -25, m: 60, a: 10 },
};

export enum PlayerSubClasses {
  SICARIO = "SICARIO",
  LADRON = "LADRON",
  PIRATA = "PIRATA",
  DUELISTA = "DUELISTA",
  BARBARO = "BARBARO",
  CABALLERO = "CABALLERO",
  MARCIAL = "MARCIAL",
  SANADOR = "SANADOR",
  MONTARAZ = "MONTARAZ",
  PALADIN = "PALADIN",
  SUPLICANTE_OSCURO = "SUPLICANTE",
  CAZAMAGOS = "CAZAMAGOS",
  BRUJO = "BRUJO",
  CLERIGO = "CLERIGO",
  DRUIDA = "DRUIDA",
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
    dependsOn: PlayerClasses.RUFIAN,
    formulaName: PlayerSubClasses.PIRATA,
    name: ["Pirata", "Pirate"],
  },
  {
    dependsOn: PlayerClasses.RUFIAN,
    formulaName: PlayerSubClasses.SICARIO,
    name: ["Sicario", "Assasin"],
  },
  {
    dependsOn: PlayerClasses.RUFIAN,
    formulaName: PlayerSubClasses.LADRON,
    name: ["Ladron", "Thief"],
  },

  {
    dependsOn: PlayerClasses.GUERRERO,
    formulaName: PlayerSubClasses.DUELISTA,
    name: ["Duelista", "Duelist"],
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
    dependsOn: PlayerClasses.EXPLORADOR,
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
    name: ["Cazamagos", "Magehunter"],
  },

  {
    dependsOn: PlayerClasses.SHAMAN,
    formulaName: PlayerSubClasses.BRUJO,
    name: ["Brujo", "Witch"],
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
    name: ["Psiquico", "Psychic"],
  },
];

export const translateSubclass = (formulaName: ValidPlayerSubClasses, idx: number) => {
  return subclasses.find(c => c.formulaName === formulaName)?.name[idx]
}

export const classes = [
  {
    name: ["Rufian", "Ruffian"],
    formulaName: PlayerClasses.RUFIAN,
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
    name: ["Explorador", "Explorer"],
    formulaName: PlayerClasses.EXPLORADOR,
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
