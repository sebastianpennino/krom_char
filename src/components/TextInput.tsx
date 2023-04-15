export const TextInput = () => {
  const title = "Character Name";
  const placeholder = "Enter your character name";
  const id = "charName";

  return (
    <>
      <label htmlFor={id}>{title}</label>
      <input
        id={id}
        type="text"
        className="block w-full mt-1"
        placeholder={placeholder}
      />
    </>
  );
};
