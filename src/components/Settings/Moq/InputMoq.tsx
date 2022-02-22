interface InputMoqProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: string;
  changeValue: (value: string, targetName: string) => void;
  currentValue: string;
  placeholder: string;
  readOnly: boolean;
}

const InputMoq: React.FC<InputMoqProps> = ({
  name,
  type,
  changeValue,
  currentValue,
  placeholder,
  readOnly,
}) => {
  const valueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeValue(e.target.value, e.target.name);
  };
  return (
    <label htmlFor={name}>
      {name}
      <input
        type={type}
        name={name}
        onChange={valueChange}
        value={currentValue || ''}
        placeholder={placeholder}
        readOnly={readOnly}
      />
    </label>
  );
};

export default InputMoq;
