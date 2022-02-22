/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import InputRadioButton from './InputRadioButton';
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
            id="nAi"
            type="radio"
            name="choixFiltre"
            value="2"
            labelName="Numéro AI"
            setFilterTarget={setFilterTarget}
            setOpenFilterZone={setOpenFilterZone}
            setSearchType={setSearchType}
          />
          <InputRadioButton
            id="refMani"
            type="radio"
            name="choixFiltre"
            value="3"
            labelName="Référence Manitou"
            setFilterTarget={setFilterTarget}
            setOpenFilterZone={setOpenFilterZone}
            setSearchType={setSearchType}
          />
          <InputRadioButton
            id="dateFlash"
            type="radio"
            name="choixFiltre"
            value="4"
            labelName="Date Flash"
            setFilterTarget={setFilterTarget}
            setOpenFilterZone={setOpenFilterZone}
            setSearchType={setSearchType}
          />
          <InputRadioButton
            id="paletNumber"
            type="radio"
            name="choixFiltre"
            value="5"
            labelName="Palet Number"
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
