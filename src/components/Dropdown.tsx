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
  changeFn: any;
  selection: any;
};

export const Dropdown = ({
  options = defaultOptions,
  chosenLang = 0,
  title = ["Dropdown"],
  filterFn,
  changeFn,
  selection,
}: Props) => {
  const cleanTitle = Array.isArray(title) ? title[chosenLang] : "Dropdown";
  const id = toCamelCase(cleanTitle);
  let cleanOpts = options;

  if (typeof filterFn === "function") {
    cleanOpts = options.filter(filterFn);
  }

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("onChange!", e.target.value);
    changeFn(e.target.value);
  };

  return (
    <>
      <label htmlFor={id}>{cleanTitle}</label>
      <select
        id={id}
        className="block w-full mt-1"
        onChange={(e) => onChange(e)}
        value={selection}
      >
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
