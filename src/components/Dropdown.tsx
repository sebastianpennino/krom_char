import { toCamelCase } from "../utils";

const defaultOptions = [
  {
    name: ["Tanque", "Tank-esque"],
    formulaName: "ROCK",
  },
  {
    name: ["Orco", "Orc"],
    formulaName: "ORCO",
  },
]

export const Dropdown = ({options = defaultOptions, chosenLang = 0, title = ['Dropdown'] }) => {
  const cleanTitle = Array.isArray(title) ? title[chosenLang] : 'Dropdown'
  const id = toCamelCase(cleanTitle)

  return (
    <>
      <label htmlFor={id}>{cleanTitle}</label>
      <select id={id} className="block w-full mt-1">
        {options.map((opt) => {
          return (
            <option key={opt.formulaName} value={opt.formulaName}>
              {opt.name[chosenLang]}
            </option>
          );
        })}
      </select>
    </>
  );
};
