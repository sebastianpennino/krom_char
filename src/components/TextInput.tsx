import { useState } from "react";
import { removeNonLettersHyphensUnderscores, toCamelCase } from "../utils";

export const TextInput = ({
  title = "Character Name",
  placeholder = "Enter your character name",
}) => {
  const [value, setValue] = useState<string>("");
  const id = toCamelCase(title);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(removeNonLettersHyphensUnderscores(e.target.value || ""));
  };

  return (
    <>
      <label htmlFor={id}>{title}</label>
      <input
        id={id}
        type="text"
        className="block w-full mt-1"
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        value={value}
      />
    </>
  );
};
