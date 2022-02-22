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
      <Tbody moqList={moqList} saveSelectCase={saveSelectCase} />
    </table>
  );
};

export default Table;
