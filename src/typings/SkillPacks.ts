import { ValidPlayerSkills, PlayerSkills, allSkills } from "./Skills";

export enum PlayerSkillPacks {
  NOBLE = "NOBLE",
  ACADEMICO = "ACADEMICO",
  HERBORISTA = "HERBORISTA",
  ARTESANO = "ARTESANO",
  BANDIDO = "BANDIDO",
  RITUALISTA = "RITUALISTA",
  SOLDADO = "SOLDADO",
  COMERCIANTE = "COMERCIANTE",
  ARQUELOGO = "ARQUELOGO",
  RURAL = "RURAL",
  MARINERO = "MARINERO",
  BUFON = "BUFON",
  CORTESANO = "CORTESANO",
  LUCHADOR = "LUCHADOR",
  INFILTRADOR = "INFILTRADOR",
}

export type ValidPlayerSkillPacks =
  (typeof PlayerSkillPacks)[keyof typeof PlayerSkillPacks];

export type SkillPack = {
  skillList: ValidPlayerSkills[];
  name: string[];
  formulaName: ValidPlayerSkillPacks;
};

export const allSkillPacks: SkillPack[] = [
  {
    skillList: [
      PlayerSkills.ETIQUETA,
      PlayerSkills.DIPLOMACIA,
      PlayerSkills.ORATORIA,
      PlayerSkills.MONTAR,
      PlayerSkills.TACTICAS_DE_COMBATE,
      PlayerSkills.LIDERAZGO,
      PlayerSkills.CAZAR,
      PlayerSkills.HERALDICA,
    ],
    name: ["Aristócrata / Noble", "Noble"],
    formulaName: PlayerSkillPacks.NOBLE,
  },
  {
    skillList: [
      PlayerSkills.CONCENTRACION,
      PlayerSkills.CALIGRAFIA_ESCRIBA,
      PlayerSkills.ORATORIA,
      PlayerSkills.POESIA,
      PlayerSkills.PINTURA_ESCULTURA,
      PlayerSkills.LEYES,
      PlayerSkills.FLORA_Y_FAUNA,
      PlayerSkills.ARTEFACTOS,
      PlayerSkills.MECANICA,
    ],
    name: ["Acádemico / Erudito", "Scholar"],
    formulaName: PlayerSkillPacks.ACADEMICO,
  },
  {
    skillList: [
      PlayerSkills.HIERBAS_Y_VENENOS,
      PlayerSkills.PRIMEROS_AUXILIOS,
      PlayerSkills.SUPERVIVENCIA,
      PlayerSkills.DETECTAR_SUSTANCIAS,
      PlayerSkills.TALLAR_MADERA,
      PlayerSkills.RASTREO,
      PlayerSkills.ESPELEOLOGIA,
      PlayerSkills.ORIENTACION_CELESTE,
    ],
    name: ["Herborista", "Herbalist"],
    formulaName: PlayerSkillPacks.HERBORISTA,
  },
  {
    skillList: [
      PlayerSkills.ALBANILERIA,
      PlayerSkills.TALABARTERIA,
      PlayerSkills.HERRERIA,
      PlayerSkills.SIGILO,
      PlayerSkills.MONTAR,
      PlayerSkills.APOSTAR,
      PlayerSkills.ARMAR_TRAMPAS,
      PlayerSkills.CAZAR,
      PlayerSkills.AGILIDAD_MANUAL,
    ],
    name: ["Artesano", "Artisan"],
    formulaName: PlayerSkillPacks.ARTESANO,
  },
  {
    skillList: [
      PlayerSkills.HURGAR_BOLSILLOS,
      PlayerSkills.REGISTRAR,
      PlayerSkills.ABRIR_CERRADURAS,
      PlayerSkills.MEZCLARSE,
      PlayerSkills.AGILIDAD_MANUAL,
      PlayerSkills.SIGILO,
      PlayerSkills.SOBORNO,
      PlayerSkills.APOSTAR,
    ],
    name: ["Bandido", "Bandit"],
    formulaName: PlayerSkillPacks.BANDIDO,
  },
  {
    skillList: [
      PlayerSkills.HECHIZOS_Y_RUNAS,
      PlayerSkills.CRIATURAS_MAGICAS,
      PlayerSkills.ORIENTACION_CELESTE,
      PlayerSkills.CONCENTRACION,
      PlayerSkills.HIERBAS_Y_VENENOS,
      PlayerSkills.LENGUAS_ANTIGUAS,
      PlayerSkills.DETECTAR_SUSTANCIAS,
      PlayerSkills.RESISTIR_PERSUACION,
    ],
    name: ["Ritualista", "Ritualist"],
    formulaName: PlayerSkillPacks.RITUALISTA,
  },
  {
    skillList: [
      PlayerSkills.LIDERAZGO,
      PlayerSkills.INTERROGACION,
      PlayerSkills.DIPLOMACIA,
      PlayerSkills.HERALDICA,
      PlayerSkills.PRIMEROS_AUXILIOS,
      PlayerSkills.TACTICAS_DE_COMBATE,
      PlayerSkills.MONTAR,
      PlayerSkills.CAMUFLAR,
    ],
    name: ["Soldado", "Soldier"],
    formulaName: PlayerSkillPacks.SOLDADO,
  },
  {
    skillList: [
      PlayerSkills.TASACION,
      PlayerSkills.BUSQUEDA_URBANA,
      PlayerSkills.LEYES,
      PlayerSkills.SOBORNO,
      PlayerSkills.REGATEO,
      PlayerSkills.ORATORIA,
      PlayerSkills.OFUSCAR,
      PlayerSkills.CONTACTOS,
    ],
    name: ["Comerciante", "Merchant"],
    formulaName: PlayerSkillPacks.COMERCIANTE,
  },
  {
    skillList: [
      PlayerSkills.HISTORIA,
      PlayerSkills.FORTIFICACIONES,
      PlayerSkills.TREPAR_Y_ESCALAR,
      PlayerSkills.ESPELEOLOGIA,
      PlayerSkills.TASACION,
      PlayerSkills.LENGUAS_ANTIGUAS,
      PlayerSkills.MONTAR,
      PlayerSkills.REGISTRAR,
    ],
    name: ["Arqueólogo", "Archaeologist"],
    formulaName: PlayerSkillPacks.ARQUELOGO,
  },
  {
    skillList: [
      PlayerSkills.SUPERVIVENCIA,
      PlayerSkills.ORIENTACION_CLIMATICA,
      PlayerSkills.ADIESTRAR_DOMESTICAR,
      PlayerSkills.MONTAR,
      PlayerSkills.NADAR,
      PlayerSkills.RASTREO,
      PlayerSkills.FLORA_Y_FAUNA,
      PlayerSkills.TALABARTERIA,
    ],
    name: ["Rural / Campesino", "Rural"],
    formulaName: PlayerSkillPacks.RURAL,
  },
  {
    skillList: [
      PlayerSkills.NAVEGACION,
      PlayerSkills.NADAR,
      PlayerSkills.NUDOS,
      PlayerSkills.TREPAR_Y_ESCALAR,
      PlayerSkills.ORIENTACION_CELESTE,
      PlayerSkills.TACTICAS_DE_COMBATE,
      PlayerSkills.HERALDICA,
      PlayerSkills.BUSQUEDA_URBANA,
    ],
    name: ["Marinero", "Sailor"],
    formulaName: PlayerSkillPacks.MARINERO,
  },
  {
    skillList: [
      PlayerSkills.ACTUACION_Y_MIMICA,
      PlayerSkills.ORATORIA,
      PlayerSkills.ACROBACIAS,
      PlayerSkills.SALTAR_SALTOS,
      PlayerSkills.SENAS_Y_LEER_LABIOS,
      PlayerSkills.CANTAR_TOCAR_INSTRUMENTO,
      PlayerSkills.IMITAR_SONIDOS,
      PlayerSkills.DISFRAZ,
    ],
    name: ["Entretenedor / Bufón", "Entertainer"],
    formulaName: PlayerSkillPacks.BUFON,
  },
  {
    skillList: [
      PlayerSkills.OFUSCAR,
      PlayerSkills.SEDUCCION,
      PlayerSkills.ATAQUE_SILENCIOSO,
      PlayerSkills.DETECTAR_SUSTANCIAS,
      PlayerSkills.INTERROGACION,
      PlayerSkills.ETIQUETA,
      PlayerSkills.DISFRAZ,
      PlayerSkills.SIGILO,
    ],
    name: ["Cortesano", "Courtier"],
    formulaName: PlayerSkillPacks.CORTESANO,
  },
  {
    skillList: [
      PlayerSkills.DESENVAINAR_VELOZ,
      PlayerSkills.MALABARES_Y_FLORITURAS,
      PlayerSkills.ESPRINTAR,
      PlayerSkills.IGNORAR_DOLOR,
      PlayerSkills.DESARMAR,
      PlayerSkills.CAZAR,
      PlayerSkills.LEVANTAR_PESOS,
      PlayerSkills.MENDIGAR,
    ],
    name: ["Luchador", "Fighter"],
    formulaName: PlayerSkillPacks.LUCHADOR,
  },
  {
    skillList: [
      PlayerSkills.RASTREO,
      PlayerSkills.REGISTRAR,
      PlayerSkills.DETECTAR_SUSTANCIAS,
      PlayerSkills.INTERROGACION,
      PlayerSkills.SIGILO,
      PlayerSkills.DISFRAZ,
      PlayerSkills.BUSQUEDA_URBANA,
      PlayerSkills.MEZCLARSE,
    ],
    name: ["Infiltrador", "Infiltrator"],
    formulaName: PlayerSkillPacks.INFILTRADOR,
  },
];

// Using the "rank" value or a skill calculate the sum of all in a given skillpack
// Note: this function uses the skillpack formulaName to find it, and returns
// two numbers: the value and the number of skills in the skillpack
export const calculateSKillpackValue = (
  SkillPackName: string
): [number, number] => {
  const found = allSkillPacks.find((skillpack) => {
    return skillpack.formulaName === SkillPackName;
  });
  if (found) {
    const { skillList } = found;
    const skillPackValue = skillList.reduce((sum, currentSkillName) => {
      const match = allSkills.find((skill) => {
        return skill.formulaName === currentSkillName;
      });
      return sum + (match?.rank || 0);
    }, 0);
    return [skillPackValue, skillList.length];
  }
  return [0, 0];
};

// Using the "rank" value or a skill calculate the sum of all in a given skillpack
export const calculateSKillpackValueV2 = (skillpack: SkillPack): number => {
  const { skillList } = skillpack;
  const skillPackValue = skillList.reduce((sum, currentSkillName) => {
    const match = allSkills.find((skill) => {
      return skill.formulaName === currentSkillName;
    });
    return sum + (match?.rank || 0);
  }, 0);
  return skillPackValue;
};
