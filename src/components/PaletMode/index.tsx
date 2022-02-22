/* eslint-disable no-else-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-template */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from 'react';
import BackToMenu from '../BackToMenu';
import { DateTime } from 'luxon';
import XLSX from 'xlsx';
import Go from '../../../assets/go.png';
import Stop from '../../../assets/stop.png';

const PaletMode = () => {
  const [input, setInput] = useState('exemple');
  const [PaletArray, setPaletArray] = useState([]);
  const [PaletNumber, setPaletNumber] = useState('');
  const [count, setCount] = useState(1);
  const [image, setImage] = useState(false);

  const paletNumberFx = () => {
    const todaydDate = DateTime.now();
    const newNumber = String.fromCharCode(64 + count);
    const newNumberPalet = `${todaydDate.ordinal}${DateTime.now().year}-${newNumber}`;
    setPaletNumber(newNumberPalet);
  };
  if (PaletNumber === '' && PaletArray.length === 0) {
    paletNumberFx();
    setCount(count + 1);
  }
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const resetArray = () => {
    setPaletArray([]);
  };
  const sauvegarde = () => {
    setCount(count + 1);
    paletNumberFx();
    const csvToExcel = PaletArray.join("\n").replaceAll('/', ';');
    const forExcel = csvToExcel.split("\n").map((row: string) => {
      return row.split(/;|,/);
    });
    function compareSecondColumn(a: any, b: any) {
      if (a[2] === b[2]) {
          return 0;
      }
      else {
          return (a[2] < b[2]) ? -1 : 1;
      }
    }
    forExcel.sort(compareSecondColumn)
    const ws = XLSX.utils.json_to_sheet(forExcel, {skipHeader:true});
		const wb = XLSX.utils.book_new();
    ws['!autosort'] = { ref:"C2:C100" }

		XLSX.utils.book_append_sheet(wb, ws, `${PaletNumber}`);
		XLSX.writeFile(wb, `${PaletNumber}.xlsx`)
    resetArray();
  };
  useEffect(() => {
    const delayArray = setTimeout(() => {
      setPaletArray(array => [...array, input]);
      document.getElementById('inputField')!.select();
      setImage(false);
    }, 1000);
    setImage(true);
    return () => clearTimeout(delayArray);
  }, [input]);
  return (
    <div className="paletMode">
      <BackToMenu to="/flash"/>
      <label htmlFor="datamatrix">Code Barre</label>
      <input
        id="inputField"
        name="datamatrix"
        type="text"
        style={{ textAlign: 'center' }}
        value={input}
        onChange={onChangeInput}
        onFocus={(e) => e.target.select()}
      />
      <button type="button" onClick={sauvegarde}>
        Save
      </button>
      <div className="images">
        {image ? (
          <img src={Stop} alt="StopLogo" />
        ) : (
          <img src={Go} alt="goLogo" />
        )}
      </div>
    </div>
  );
};

export default PaletMode;
