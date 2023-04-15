export const NumericInput = () => {
  const title = "Fu";
  const id = "fu";

  const mod = Number(0);
  const min = mod < 0 ? 2 : 1;
  const initialValue = min
  const max = 5;

  const modText = mod < 0 ? `(${mod})` : mod > 0 ? `(+${mod})` : ``;

  return (
    <>
      <label htmlFor={id}>
        {title} {modText}
      </label>
      <input
        id={id}
        type="number"
        min={min}
        max={max}
        step="1"
        className="block w-full mt-1"
        defaultValue={initialValue}
      />
    </>
  );
};
