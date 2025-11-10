import { Input } from "./Input";

export const InputWithLabel = ({
  name,
  id,
  placeholder,
  value,
  onChange,
  labelName,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1" {...props}>
      <label htmlFor={id} className="cursor-pointer font-bold">
        {labelName}
      </label>
      <Input
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
