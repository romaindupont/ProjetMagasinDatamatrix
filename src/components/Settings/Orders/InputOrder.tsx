interface InputOrderProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: string;
  changeValueOrder: (value: string, targetName: string) => void;
  currentValue: string;
  placeholder: string;
  readOnly: boolean;
  className: string;
}

const InputOrder: React.FC<InputOrderProps> = ({
  name,
  type,
  changeValueOrder,
  currentValue,
  placeholder,
  readOnly,
  className,
}) => {
  const valueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeValueOrder(e.target.value, e.target.name);
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
        className={className}
      />
    </label>
  );
};

export default InputOrder;
