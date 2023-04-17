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
];

type opt = {
  name: string[];
  formulaName: any;
};

type Props = {
  options: Array<opt>;
  chosenLang: number;
  title: string[];
  filterFn?: (options: opt) => boolean;
};

export const Dropdown = ({
  options = defaultOptions,
  chosenLang = 0,
  title = ["Dropdown"],
  filterFn,
}: Props) => {
  const cleanTitle = Array.isArray(title) ? title[chosenLang] : "Dropdown";
  const id = toCamelCase(cleanTitle);
  let cleanOpts = options;

  if (typeof filterFn === "function") {
    cleanOpts = options.filter(filterFn);
  }

  return (
    <>
      <label htmlFor={id}>{cleanTitle}</label>
      <select id={id} className="block w-full mt-1">
        {cleanOpts.map((opt) => {
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
