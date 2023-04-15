import { useState } from "react";
import { toCamelCase } from "../utils";

export const NumericInput = ({
  title = "Fu",
  unique = '',
  mod = 0,
  min = 1,
  max = 5,
}) => {
  const uid = unique || toCamelCase(title)
  const [value, setValue] = useState<number>(1);
  const modText = mod < 0 ? `(${mod})` : mod > 0 ? `(+${mod})` : ``;

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
    setValue(parseInt(e.target.value) || 0);
  };

  return (
    <div className="block w-full mt-1">
      <label
        htmlFor={uid}
        className="w-full text-sm font-semibold"
      >
        {title} {modText}
      </label>
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button
          onClick={decrement}
          className="flex items-center justify-center font-bold py-2 px-4 rounded"
        >
          <span className="">-</span>
        </button>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e)}
          className="outline-none focus:outline-none text-center w-full font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center outline-none"
          name={uid}
        />
        <button
          onClick={increment}
          className="flex items-center justify-center font-bold py-2 px-4 rounded"
        >
          <span className="">+</span>
        </button>
      </div>
    </div>
  );
};
