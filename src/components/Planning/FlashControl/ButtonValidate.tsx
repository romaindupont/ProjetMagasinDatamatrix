/* eslint-disable radix */
/* eslint-disable no-plusplus */
/* import { notification } from 'utils/notification'; */
import { DateTime } from 'luxon';

interface ButtonValidateProps {
  id: string;
  flashList: string[];
  saveDbAi: (
    id: number,
    counter: number,
    PaletRefrence: string,
    list: any[]
  ) => void;
  counter: number;
  paletCounter: number;
  addCounterPalet: () => void;
  onClick: () => void;
  deleteFlashList: () => void;
}

const ButtonValidate: React.FC<ButtonValidateProps> = ({
  flashList,
  id,
  saveDbAi,
  counter,
  paletCounter,
  addCounterPalet,
  deleteFlashList,
}) => {
  const valider = () => {
    const todaydDate = DateTime.now();
    const newNumber = String.fromCharCode(64 + paletCounter);
    const newNumberPalet = `${todaydDate.ordinal}${
      DateTime.now().year
    }-${newNumber}`;
    addCounterPalet();
    saveDbAi(parseInt(id), counter, newNumberPalet, flashList);
    deleteFlashList();
  };
  return (
    <button
      type="button"
      className="chargement--button validation"
      onClick={valider}
    >
      Valider
    </button>
  );
};
export default ButtonValidate;
