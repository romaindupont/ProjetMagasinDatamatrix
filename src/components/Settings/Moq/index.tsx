/* eslint-disable radix */
/* eslint-disable consistent-return */
import { useEffect } from 'react';
import BackToMenu from '../../BackToMenu';
import InputMoq from '../../../containers/Planning/Settings/Moq/InputMoq';
import Table from './Table';

interface MoqProps {
  dbMoqList: () => void;
  moqList: string[];
  saveSelectCase: () => void;
  id: string | number;
  addMoqInDb: (reference: string, moq: number) => void;
  updatedMoqInDb: (id: string | number, reference: string, moq: number) => void;
  deleteMoqInDb: (id: string | number) => void;
  Supprimer: () => void;
  validationOrModifClic: () => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Moq: React.FC<MoqProps> = ({
  dbMoqList,
  moqList,
  saveSelectCase,
  id,
  addMoqInDb,
  updatedMoqInDb,
  deleteMoqInDb,
}) => {
  const validationOrModifClic = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      id: { value: string | number };
      reference: { value: string };
      moq: { value: number };
    };
    if (id === '') {
      return addMoqInDb(target.reference.value, target.moq.value);
    }
    updatedMoqInDb(target.id.value, target.reference.value, target.moq.value);
  };
  const Supprimer = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    deleteMoqInDb(id);
  };
  useEffect(() => {
    dbMoqList();
  }, [dbMoqList]);
  return (
    <div>
      <BackToMenu to="/settings" onClick={function (): void {
        throw new Error('Function not implemented.');
      } }/>
      <div className="moq">
        <p>Zone MOQ</p>
        <div className="tableauMoq">
          <Table moqList={moqList} saveSelectCase={saveSelectCase}/>
        </div>
        <form className="inputMoq">
          <InputMoq
            type="number"
            name="id"
            placeholder="id"
            readOnly="readOnly"
          />
          <InputMoq
            type="text"
            name="reference"
            placeholder="réference"
            readOnly=""
          />
          <InputMoq type="number" name="moq" placeholder="moq" readOnly="" />
          <button
            type="submit"
            className="chargement--button validMod"
            onClick={validationOrModifClic}
          >
            {id === '' || id === null ? 'Valider' : 'Modifier'}
          </button>
          <button
            type="submit"
            className="chargement--button removeButton"
            onClick={Supprimer}
          >
            Supprimer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Moq;
