/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
import { notification } from '../../../utils/notification';

interface ButtonTestProps {
  quantity: number;
  flashList: string[];
  AiList: NodeList[];
  arrayTest: NodeList[];
}

const ButtonTest: React.FC<ButtonTestProps> = ({ quantity, flashList }) => {
  const testClick = () => {
    const arrayTest = [];
    const AiList = [];
    const tbody = document.querySelectorAll('#flashListing > tr');
    arrayTest.push(tbody);
    for (let i = 0; i < arrayTest[0].length; i++) {
      AiList.push(arrayTest[0][i].cells[2].innerHTML);
    }
    if (AiList.length > [...new Set(AiList)].length) {
      notification(
        "Impossible d'enregistrer ! Vous avez flashé deux fois le même numéro d'AI"
      );
    }
    if (AiList.length === [...new Set(AiList)].length && AiList.length !== 0) {
      if (flashList.length === quantity) {
        if (document.querySelectorAll('.notGood').length > 0) {
          return notification('Référence Incorrect dans le tableau');
        }
        notification('Vous pouvez désormais valider et enregistrer');
        document.querySelector<HTMLElement>('.validation')!.style.display = 'block';
      } else {
        notification('Pas assez de références');
      }
    }
    if (AiList.length < [...new Set(AiList)].length || AiList.length === 0) {
      notification('Pas assez de références');
    }
  };
  return (
    <button type="button" className="chargement--button" onClick={testClick}>
      Test
    </button>
  );
};
export default ButtonTest;
