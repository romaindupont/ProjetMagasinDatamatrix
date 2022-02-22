import { useEffect, useState } from 'react';
import Table from './Table';
import BackToMenu from 'components/BackToMenu';
import PrintButton from 'containers/Planning/Settings/AiZone/PrintButton';
import FilterZone from './FilterZone';
import ExcelButton from 'containers/Planning/Settings/AiZone/ExcelButton';
import './style.scss';

interface AiZoneProps {
  dbAiList: () => void;
  filterTarget: string;
  setFilterTarget: (filterTarget: string) => void;
  setSearchType: (label : string) => void;
}

const AiZone: React.FC<AiZoneProps> = ({ dbAiList }) => {
  const [ searchText, setSearchText ] = useState('');
  const [ filterTarget, setFilterTarget ] = useState('1');
  const [ searchType, setSearchType ] = useState('Référence HQ');
  useEffect(() => {
    dbAiList();
  }, [dbAiList]);
  return (
    <div>
      <BackToMenu to="/settings" />
      <div className="moq">
        <p>Zone AI</p>
        <div className="tableauAI">
          <div className="tableauAI-header">
            <input type="text" onChange={(e)=>setSearchText(e.target.value)} value={searchText} placeholder={`Votre recherche ${searchType}`} />
            <div className="buttonZone">
              <FilterZone setFilterTarget={setFilterTarget} setSearchType={setSearchType}/>
              <PrintButton filterTarget={filterTarget} searchText={searchText}/>
              <ExcelButton filterTarget={filterTarget} searchText={searchText}/>
            </div>
          </div>
          <Table searchText={searchText} filterTarget={filterTarget} />
        </div>
      </div>
    </div>
  );
};

export default AiZone;
