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
  const abbrv = `(${uid})`

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
    setValue(parseInt(e.target.value) || 1);
  };

  return (
    <div className="block w-full mt-1">
      <label htmlFor={uid} className="w-full text-xs font-semibold">
        {title} {abbrv} {modText}
      </label>
      <div className="flex h-10 relative mt-1">
        <div className="flex flex-col">
          <button
            onClick={increment}
            title="increase"
            className="h-1/2 flex items-center py-2 px-3 rounded"
          >
            <span className="text-xs">&#9650;</span>
          </button>
          <button
            onClick={decrement}
            title="decrease"
            className="h-1/2 flex items-center py-2 px-3 rounded"
          >
            <span className="text-xs">&#9660;</span>
          </button>
        </div>
        <input
          type="text"
          value={value}
          title={title}
          onChange={(e) => onChange(e)}
          className="w-full text-center"
          name={uid}
        />
      </div>
    </div>
  );
};
