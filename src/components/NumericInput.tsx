import { useState } from "react";
import { toCamelCase } from "../utils";

export const NumericInput = ({
  title = "Fu",
  unique = "",
  mod = 0,
  min = 1,
  max = 5,
}) => {
  const uid = unique || toCamelCase(title);
  const [value, setValue] = useState<number>(1);
  const modText = mod < 0 ? `(${mod})` : mod > 0 ? `(+${mod})` : "";
  const abbrv = `(${uid})`;

  const decrement = () => {
    setValue((prevValue) => {
      if (prevValue > min) {
        return prevValue - 1;
      }
      return prevValue;
    });
  };

  const increment = () => {
    setValue((prevValue) => {
      if (prevValue < max) {
        return prevValue + 1;
      }
      return prevValue;
    });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value, 10) || min);
  };

  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const clean = parseInt(e.target.value, 10);
    if (clean > max) {
      setValue(max);
    }
    if (clean < min) {
      setValue(min);
    }
  };

  return (
    <div className="block w-full mt-1">
      <label htmlFor={uid} className="w-full text-sm font-semibold">
        <span className="sm:hidden">{uid}</span><span className="hidden sm:inline">{title} {abbrv}</span> {modText}
      </label>
      <div className="flex h-10 relative mt-1">
        <button
          onClick={decrement}
          title="increase"
          className="flex items-center px-1 sm:px-2 md:px-4 lg:px-6 rounded"
        >
          <span className="text-xs">&#x25C0;</span>
        </button>
        <input
          type="text"
          value={value}
          title={title}
          onChange={(e) => onChange(e)}
          onBlur={(e) => onBlur(e)}
          className="w-full text-center"
          name={uid}
        />
        <button
          onClick={increment}
          title="decrease"
          className="flex items-center px-1 sm:px-2 md:px-4 lg:px-6 rounded"
        >
          <span className="text-xs">&#x25B6;</span>
        </button>
      </div>
    </div>
  );
};
