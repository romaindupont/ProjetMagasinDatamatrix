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
      <Tbody listDelivery={listDelivery} saveIdDelivery={saveIdDelivery} onChange={function (): void {
        throw new Error('Function not implemented.');
      } } />
    </table>
  );
};

export default Table;
