import Tbody from 'containers/Planning/Settings/Orders/Tbody';
import Thead from './Thead';

interface TableProps {
  filterTarget: string;
  searchText: string;
}

const Table: React.FC<TableProps> = ({ searchText, filterTarget }) => {
  return (
    <table>
      <Thead />
      <Tbody searchText={searchText} filterTarget={filterTarget} />
    </table>
  );
};

export default Table;
