interface InputRadioButtonProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setFilterTarget: (filterTarget: string) => void;
  setSearchType: (label: string) => void;
  setOpenFilterZone: (bool: boolean) => void;
  id: string;
  type: string;
  name: string;
  value: string;
  labelName: string;
}
const InputRadioButton: React.FC<InputRadioButtonProps> = ({
  setFilterTarget,
  id,
  type,
  name,
  value,
  labelName,
  setOpenFilterZone,
  setSearchType,
}) => {
  const validClic = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFilterTarget(e.target.value);
    setOpenFilterZone(false);
    setSearchType(e.target.className);
  };
  return (
    <label htmlFor={id}>
      {labelName}
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        className={labelName}
        onChange={validClic}
      />
    </label>
  );
};

export default InputRadioButton;
