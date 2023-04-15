export const Dropdown = () => {
  const title = "Dropdown 1";
  const id = "dropdown1";
  const options = [
    { label: "Option A1", value: "a1" },
    { label: "Option B1", value: "b1" },
    { label: "Option C1", value: "c1" },
  ];

  return (
    <>
      <label htmlFor={id}>{title}</label>
      <select id={id} className="block w-full mt-1">
        {options.map((opt) => {
          return (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          );
        })}
      </select>
    </>
  );
};
