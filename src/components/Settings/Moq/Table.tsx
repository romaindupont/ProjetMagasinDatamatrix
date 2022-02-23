import Thead from './Thead';
import Tbody from './Tbody';

interface TableProps {
  moqList: any[];
  saveSelectCase: () => void;
}

const Table: React.FC<TableProps> = ({ moqList, saveSelectCase }) => {
  return (
    <table>
      <Thead />
      <Tbody moqList={moqList} saveSelectCase={saveSelectCase} id={''} id_ref={''} onChange={function (): void {
        throw new Error('Function not implemented.');
      } } />
    </table>
  );
};

export default Table;
