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

export function getRandomCharacterName(): string {
  const names = [
    "Elvandar",
    "Nimrodel",
    "Arandor",
    "Faelivrin",
    "Eldamar",
    "Caelondia",
    "Thalassia",
    "Galadrielle",
    "Earendil",
    "Celeborn",
    "Aurelian",
    "Alatar",
    "Eruanna",
    "Lorieniel",
    "Elrosiel",
    "Calenloth",
    "Eolande",
    "Vardaessa",
    "Thranduil",
    "Eowynne",
    "Amrothos",
    "Glorfindel",
    "Luthien",
    "Elessar",
    "Galathil",
    "Ardalambion",
    "Fingolfin",
    "Eolair",
    "Arien",
    "Aranthir",
    "Arodion",
    "Cirdan",
    "Finrod",
    "Gwindor",
    "Ingwion",
    "Melian",
    "Mithrandir",
    "Radagast",
    "Saruman",
    "Ulmo",
  ];
  const name = names[Math.floor(Math.random() * names.length)];
  return name;
}
