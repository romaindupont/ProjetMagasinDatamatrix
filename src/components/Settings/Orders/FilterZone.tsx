/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import InputRadioButton from '../../../components/Settings/AiZone/InputRadioButton';
import ImageFiltre from '../../../../assets/filtre.png';

interface FilterZoneProps {
  onClick?: () => void;
  setFilterTarget: (filterTarget: string) => void;
  setSearchType: (label : string) => void;
  setOpenFilterZone?: (bool : boolean) => void;
}


const FilterZone: React.FC<FilterZoneProps> = ({ setFilterTarget, setSearchType }) => {
  const [openFilterZone, setOpenFilterZone] = useState(false);
  return (
    <div className="filterZone">
      <span
        className="filterZone-button"
        onClick={()=>setOpenFilterZone(!openFilterZone)}
      >
        <img src={ImageFiltre} alt="logo filtre" />
      </span>
      {openFilterZone && (
        <div className="filtre">
          <span>Choix du filtre</span>
          <form className="filtre-choice">
          <InputRadioButton
            id="referenceHq"
            type="radio"
            name="choixFiltre"
            value="1"
            labelName="Référence Hydequip"
            setFilterTarget={setFilterTarget}
            setOpenFilterZone={setOpenFilterZone}
            setSearchType={setSearchType}
          />
          <InputRadioButton
            id="customRef"
            type="radio"
            name="choixFiltre"
            value="2"
            labelName="Référence Custom"
            setFilterTarget={setFilterTarget}
            setOpenFilterZone={setOpenFilterZone}
            setSearchType={setSearchType}
          />
          <InputRadioButton
            id="qBesoin"
            type="radio"
            name="choixFiltre"
            value="3"
            labelName="Quantité Besoin"
            setFilterTarget={setFilterTarget}
            setOpenFilterZone={setOpenFilterZone}
            setSearchType={setSearchType}
          />
          <InputRadioButton
            id="solde"
            type="radio"
            name="choixFiltre"
            value="4"
            labelName="Solde"
            setFilterTarget={setFilterTarget}
            setOpenFilterZone={setOpenFilterZone}
            setSearchType={setSearchType}
          />
          <InputRadioButton
            id="dateBesoin"
            type="radio"
            name="choixFiltre"
            value="5"
            labelName="Date Besoin"
            setFilterTarget={setFilterTarget}
            setOpenFilterZone={setOpenFilterZone}
            setSearchType={setSearchType}
          />
          <InputRadioButton
            id="ordersNumber"
            type="radio"
            name="choixFiltre"
            value="6"
            labelName="Numéro Commande"
            setFilterTarget={setFilterTarget}
            setOpenFilterZone={setOpenFilterZone}
            setSearchType={setSearchType}
          />
          </form>
        </div>
      )}
    </div>
  );
};

export default FilterZone;
