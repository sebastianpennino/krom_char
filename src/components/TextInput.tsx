import { useState } from "react";
import { removeNonLettersHyphensUnderscores, toCamelCase } from "../utils";

export const TextInput = ({
  title = ["Nombre del personaje", "Character Name" ],
  placeholder = ["Ingresa un nombre", "Enter your character name"],
  chosenLang = 0,
  initialValue = ''
}) => {
  const [value, setValue] = useState<string>(initialValue);
  const id = toCamelCase(title[chosenLang]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(removeNonLettersHyphensUnderscores(e.target.value || ""));
  };

  return (
    <>
      <label htmlFor={id}>{title[chosenLang]}</label>
      <input
        id={id}
        type="text"
        className="block w-full mt-1"
        placeholder={placeholder[chosenLang]}
        onChange={(e) => onChange(e)}
        value={value}
      />
    </>
  );
};
