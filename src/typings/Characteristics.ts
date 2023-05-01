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
  (typeof Characteristics)[keyof typeof Characteristics];

export const characteristicsToName: Record<ValidCharacteristics, string[]> = {
  [Characteristics.FUERZA]: ["Fuerza", "Strength"],
  [Characteristics.RESISTENCIA]: ["Resistencia", "Fortitude"],
  [Characteristics.AGILIDAD]: ["Agilidad", "Agility"],
  [Characteristics.RAZON]: ["Razon", "Reasoning"],
  [Characteristics.INTUICION]: ["Intuicion", "Intuition"],
  [Characteristics.SABIDURIA]: ["Sabiduria", "Knowledge"],
  [Characteristics.SOCIAL]: ["Social", "Social"],
  [Characteristics.PERCEPCION]: ["Percepcion", "Perception"],
  [Characteristics.VOLUNTAD]: ["Voluntad", "Willpower"],
};
