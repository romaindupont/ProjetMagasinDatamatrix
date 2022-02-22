/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prettier/prettier */
import XLSX from 'xlsx';
import ImageExcel from '../../../../assets/excel.png';

interface ExcelButtonProps {
  aiList: AiListItem[];
  filterTarget: string;
  searchText: string;
  onClick: () => void;
}

interface AiListItem {
  id: any;
  referenceHq: string;
  ai: string;
  refManitou: string;
  dateFlash: string;
  paletNumber: string;
}

const ExcelButton: React.FC<ExcelButtonProps> = ({
  aiList,
  filterTarget,
  searchText,
}) => {
  const getExcelClic = () => {
    const newList = aiList.filter((list) => {
      if (filterTarget === '1') {
        return list.referenceHq.toLowerCase().includes(searchText);
      }
      if (filterTarget === '2') {
        return list.ai.toLowerCase().includes(searchText);
      }
      if (filterTarget === '3') {
        return list.refManitou.toLowerCase().includes(searchText);
      }
      if (filterTarget === '4') {
        return new Date(list.dateFlash).toLocaleDateString('fr-FR').toLowerCase().includes(searchText);
      }
      if (filterTarget === '5') {
        return list.paletNumber.toLowerCase().includes(searchText);
      }
      return true;
    });
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(newList);
    XLSX.utils.book_append_sheet(wb, ws, `Liste AI`);
    XLSX.writeFile(wb, `AIList.xlsx`);
  };
  return (
    <div className="filterZone">
      <span className="filterZone-button" onClick={getExcelClic}>
        <img src={ImageExcel} alt="logo filtre" />
      </span>
    </div>
  );
};

export default ExcelButton;
