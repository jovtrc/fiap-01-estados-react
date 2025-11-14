export const Input = ({
  name,
  id,
  placeholder,
  value,
  onChange,
  type,
  ...props
}) => {
  const inputType = type || "text";

  return (
    <input
      type={inputType}
      name={name}
      id={id}
      placeholder={placeholder}
      className="border border-neutral-400 py-2 px-3 rounded"
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};
