import Thead from './Thead';
import Tbody from './Tbody';

interface TableProps {
  listDelivery: string[];
  saveIdDelivery: () => void;
}

const Table: React.FC<TableProps> = ({ listDelivery, saveIdDelivery }) => {
  return (
    <table>
      <Thead />
      <Tbody listDelivery={listDelivery} saveIdDelivery={saveIdDelivery} />
    </table>
  );
};

export default Table;
