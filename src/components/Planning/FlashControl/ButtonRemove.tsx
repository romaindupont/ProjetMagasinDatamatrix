interface ButtonRemoveProps {
  counter: number;
  setCounter: (counter: number) => void;
  removeFlashList: (idFlash: number) => void;
  idFlash: number;
  onClick: () => void;
  removeClick: () => void;
}

const ButtonRemove: React.FC<ButtonRemoveProps> = ({
  removeFlashList,
  idFlash,
  counter,
  setCounter,
}) => {
  const removeClick = () => {
    removeFlashList(idFlash);
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <button
      type="button"
      className="chargement--button removeButton"
      onClick={removeClick}
    >
      Remove
    </button>
  );
};
export default ButtonRemove;
