import { useEffect, useState } from 'react';
import BackToMenu from 'components/BackToMenu';
import FilterZone from './FilterZone';
import Form from 'containers/Planning/Settings/Orders/Form';
import './style.scss';
import Table from './Table';

interface OrdersProps {
  ordersList: () => void;
  filterTarget: string;
  setFilterTarget: (filterTarget: string) => void;
  setSearchType: (label : string) => void;
  searchText: string;
  onClick: (e: React.SyntheticEvent) => void;
}

const Orders: React.FC<OrdersProps> = ({ ordersList }) => {
  const [ searchText, setSearchText ] = useState('');
  const [ filterTarget, setFilterTarget ] = useState('1');
  const [ searchType, setSearchType ] = useState('Référence HQ');
  useEffect(() => {
    ordersList();
  }, [ordersList]);
  return (
    <div>
      <BackToMenu to="/settings" />
      <div className="moq">
        <p>Commandes Manitou</p>
        <div className="tableauOrder">
          <div className="tableauAI-header">
            <input type="text" onChange={(e)=>setSearchText(e.target.value)} value={searchText} placeholder={`Votre recherche ${searchType}`} />
            <div className="buttonZone">
              <FilterZone setFilterTarget={setFilterTarget} setSearchType={setSearchType}/>
            </div>
          </div>
            <Table searchText={searchText} filterTarget={filterTarget} />
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Orders;
