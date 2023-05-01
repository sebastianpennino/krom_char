import { ValidPlayerSkills, PlayerSkills, allSkills } from "./Skills";

export enum PlayerSkillPacks {
  NOBLE = "NOBLE",
  ACADEMICO = "ACADEMICO",
  HERBORISTA = "HERBORISTA",
  ARTESANO = "ARTESANO",
  BANDIDO = "BANDIDO",
  RITUALISTA = "RITUALISTA",
  SOLDADO = "SOLDADO",
  SOLDADO_V2 = "SOLDADO_V2",
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
      PlayerSkills.PRIMEROS_AUXILIOS,
      PlayerSkills.CAZAR,
      PlayerSkills.HERALDICA,
    ],
    name: ["Aristócrata / Noble", "Noble"],
    formulaName: PlayerSkillPacks.NOBLE,
  },
  {
    skillList: [
      PlayerSkills.LEER_Y_ESCRIBIR,
      PlayerSkills.CALIGRAFIA_ESCRIBA,
      PlayerSkills.ORATORIA,
      PlayerSkills.POESIA,
      PlayerSkills.PINTURA,
      PlayerSkills.TOCAR_INSTRUMENTO,
      PlayerSkills.LEYES,
      PlayerSkills.FAUNA,
      PlayerSkills.ARTEFACTOS,
      PlayerSkills.MECANICA,
    ],
    name: ["Acádemico / Erudito", "Scholar"],
    formulaName: PlayerSkillPacks.ACADEMICO,
  },
  {
    skillList: [
      PlayerSkills.HIERBAS,
      PlayerSkills.VENENOS,
      PlayerSkills.PRIMEROS_AUXILIOS,
      PlayerSkills.SUPERVIVENCIA,
      PlayerSkills.MEDITACION,
      PlayerSkills.IGNORAR_DOLOR,
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
      PlayerSkills.MONTAR,
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
      PlayerSkills.ASTRONOMIA,
      PlayerSkills.MEDITACION,
      PlayerSkills.CAMUFLAR,
      PlayerSkills.LEER_Y_ESCRIBIR,
      PlayerSkills.DETECTAR_SUSTANCIAS,
      PlayerSkills.RESISTIR_PERSUACION,
    ],
    name: ["Ritualista", "Ritualist"],
    formulaName: PlayerSkillPacks.RITUALISTA,
  },
  {
    skillList: [
      PlayerSkills.INTIMIDAR,
      PlayerSkills.INTERROGACION,
      PlayerSkills.IGNORAR_DOLOR,
      PlayerSkills.HERALDICA,
      PlayerSkills.PRIMEROS_AUXILIOS,
      PlayerSkills.TACTICAS_DE_COMBATE,
      // PlayerSkills.INSTINTO_CALLEJERO,
      PlayerSkills.BUSQUEDA_URBANA,
      PlayerSkills.MONTAR,
      PlayerSkills.CAMUFLAR,
    ],
    name: ["Soldado", "Soldier"],
    formulaName: PlayerSkillPacks.SOLDADO,
  },
  {
    skillList: [
      PlayerSkills.INTIMIDAR,
      PlayerSkills.ESPRINTAR,
      PlayerSkills.IGNORAR_DOLOR,
      PlayerSkills.HERALDICA,
      PlayerSkills.PRIMEROS_AUXILIOS,
      PlayerSkills.TACTICAS_DE_COMBATE,
      PlayerSkills.DESARMAR,
      PlayerSkills.MONTAR,
      PlayerSkills.CAMUFLAR,
    ],
    name: ["Soldado (v2)", "Soldier (v2)"],
    formulaName: PlayerSkillPacks.SOLDADO_V2,
  },
  {
    skillList: [
      PlayerSkills.TASACION,
      PlayerSkills.INSTINTO_CALLEJERO,
      PlayerSkills.BUSQUEDA_URBANA,
      PlayerSkills.LEYES_COMERCIALES,
      PlayerSkills.SOBORNO,
      PlayerSkills.ORATORIA,
      PlayerSkills.ESCONDERSE,
      PlayerSkills.MEZCLARSE,
      PlayerSkills.OFUSCAR,
      PlayerSkills.MONTAR,
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
      PlayerSkills.ESPRINTAR,
      PlayerSkills.ESPELEOLOGIA,
      PlayerSkills.CARTOGRAFIA,
      PlayerSkills.LENGUAS_ANTIGUAS,
      PlayerSkills.LEER_Y_ESCRIBIR,
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
      PlayerSkills.TREPAR_Y_ESCALAR,
      PlayerSkills.MONTAR,
      PlayerSkills.ESPRINTAR,
      PlayerSkills.NADAR,
      PlayerSkills.RASTREO,
      PlayerSkills.HIERBAS,
      PlayerSkills.ARMAR_TRAMPAS,
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
      // PlayerSkills.INSTINTO_CALLEJERO,
      PlayerSkills.BUSQUEDA_URBANA,
    ],
    name: ["Marinero", "Sailor"],
    formulaName: PlayerSkillPacks.MARINERO,
  },
  {
    skillList: [
      PlayerSkills.ACTUACION_Y_MIMICA,
      PlayerSkills.ORATORIA,
      PlayerSkills.CAER_CAIDA,
      PlayerSkills.ACROBACIAS,
      PlayerSkills.SALTAR_SALTOS,
      PlayerSkills.SENAS_Y_LEER_LABIOS,
      PlayerSkills.TOCAR_INSTRUMENTO,
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
      PlayerSkills.INSTINTO_CALLEJERO,
      PlayerSkills.DISFRAZ,
      PlayerSkills.SIGILO,
      PlayerSkills.AGILIDAD_MANUAL,
    ],
    name: ["Cortesano", "Courtier"],
    formulaName: PlayerSkillPacks.CORTESANO,
  },
  {
    skillList: [
      PlayerSkills.DESENVAINAR_VELOZ,
      PlayerSkills.MALABARES_Y_FLORITURAS,
      PlayerSkills.ESPRINTAR,
      PlayerSkills.SIGILO,
      PlayerSkills.MONTAR,
      PlayerSkills.DESARMAR,
      PlayerSkills.CAZAR,
      PlayerSkills.TREPAR_Y_ESCALAR,
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
      PlayerSkills.ABRIR_CERRADURAS,
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
