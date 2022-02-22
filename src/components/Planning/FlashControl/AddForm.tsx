/* eslint-disable radix */
import { notification } from '../../../utils/notification';

interface AddFormProps {
  counter: number;
  customRef: string;
  quantity: number;
  flashList: Array<string>;
  addFlashReference: (reference: string, counter: number) => void;
  setCounter: (counter: number) => void;
  selectFlashList: (reference: string) => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const AddForm: React.FC<AddFormProps> = ({
  counter,
  customRef,
  quantity,
  addFlashReference,
  setCounter,
  flashList,
}) => {
  const addClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = (e.target as HTMLInputElement).form as unknown as typeof e.target & {
      code: { value: string };
      counter1: { value: string };
      counter2: { value: string };
    };
    console.log(target.code.value)
    if (flashList.length === parseInt(target.counter2.value)) {
      notification('Vous avez inséré suffisament de référence');
    } else {
      addFlashReference(target.code.value, counter);
      setCounter(counter + 1);
    }
  };
  return (
    <>
      <p className="refToFind">{customRef}</p>
      <form className="refToFind--input" >
        <input
          type="text"
          className="refToFind-input"
          name="code"
          onFocus={(e) => e.target.select()}
          onChange={(e) => setTimeout(() => e.target.select(), 1000)}
        />
        <input
          type="text"
          className="refToFind-counter"
          readOnly
          name="counter1"
          value={counter}
        />
        <input
          type="text"
          className="refToFind-counter"
          readOnly
          name="counter2"
          value={quantity}
        />
        <button className="chargement--button" onClick={addClick} type="submit">
          ajouter
        </button>
      </form>
    </>
  );
};
export default AddForm;
