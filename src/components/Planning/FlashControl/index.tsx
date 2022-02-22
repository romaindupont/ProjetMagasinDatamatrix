import { useState } from 'react';
import BackToMenu from 'components/BackToMenu';
import ButtonTest from './ButtonTest';
import AddForm from './AddForm';
import TheadFlash from './TheadFlash';
import ButtonRemove from './ButtonRemove';
import ButtonValidate from '../../../containers/Planning/FlashControl/ButtonValidate';

interface FlashControlProps {
  id: string;
  listDelivery: any[];
  addFlashReference: (reference: string, counter: number) => void;
  flashList: any[];
  deleteFlashList: () => void;
  removeFlashList: () => void;
  selectFlashList:(idFlash: number) => void;
  idFlash: number;
  onClick: () => void;
}

const FlashControl: React.FC<FlashControlProps> = ({ id, listDelivery, addFlashReference, flashList, deleteFlashList, removeFlashList, selectFlashList, idFlash }) => {
  const [counter, setCounter] = useState(0);
  const filterList = listDelivery.find(list => list.id === parseInt(id));
  const handleCheckBox = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      document.getElementById(`${e.target.value}`)?.classList.add("checked");
      selectFlashList(parseInt(e.target.value))
    }
    if (!e.target.checked) {
      document.getElementById(`${e.target.value}`)?.classList.remove("checked");
    }
  };
  return (
    <div className="importCde">
      <BackToMenu to="/planning" onClick={() => deleteFlashList()}/>
      <div>
        <AddForm addFlashReference={addFlashReference} {...filterList} counter={counter} setCounter={setCounter} flashList={flashList}/>
        <table>
          <TheadFlash />
          <tbody id="flashListing">
            {flashList.map((list, i) => (
              <tr key={i} id={i}>
                <td><input onChange={handleCheckBox} value={i} type="checkbox" /></td>
                <td>{list.reference.substring(17)}</td>
                <td className="numeroAI">{list.reference.substring(0, 16)}</td>
                <td
                  className={
                    list.reference.substring(17) === filterList.customRef
                      ? 'good'
                      : 'notGood'
                  }
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ButtonTest {...filterList} flashList={flashList}/>
      <ButtonRemove removeFlashList={removeFlashList} idFlash={idFlash} counter={counter} setCounter={setCounter} onClick={function (): void {
        throw new Error('Function not implemented.');
      } } removeClick={function (): void {
        throw new Error('Function not implemented.');
      } }/>
      <ButtonValidate counter={counter}/>
    </div>
  );
};

export default FlashControl;
