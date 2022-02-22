/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import ImagePrinter from '../../../../assets/imprimante.png';
import PdfAI from './PdfAI';

interface PrintButtonProps {
  aiList: any[];
  filterTarget: string;
  searchText: string;
  onClick: () => void;
}

const PrintButton: React.FC<PrintButtonProps> = ({
  aiList,
  filterTarget,
  searchText,
}) => {
  const getPrint = () => {
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
    PdfAI('Ma recherche', newList);
  };
  return (
    <div className="filterZone">
      <span className="filterZone-button" onClick={getPrint}>
        <img src={ImagePrinter} alt="logo filtre" />
      </span>
    </div>
  );
};

export default PrintButton;
