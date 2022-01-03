/* eslint-disable prefer-template */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from 'react';
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
  const sauvegarde = async () => {
    setCount(count + 1);
    await paletNumberFx();
 /*    const csvContent =
      'data:text/csv;charset=utf-8,' + PaletArray.join("\n").replaceAll('/', ';'); */
    const csvToExcel = PaletArray.join("\n").replaceAll('/', ';');
    const forExcel = csvToExcel.split("\n").map((row: string) => {
      return row.split(/;|,/);
    });
    forExcel.sort()
    console.log(forExcel)
    /* forExcel.sort((a,b)=> {
      return a[0] - b[1];
    }) */
/*     const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `${PaletNumber}.csv`);
    document.body.appendChild(link);
    link.click(); */

    const myHeader = ["id","name","location"];
    const ws = XLSX.utils.json_to_sheet(forExcel);
		const wb = XLSX.utils.book_new();
    ws['!autofilter'] = { ref:"C1" }
   /*  ws['!sort'] = {s:{c:0, r:2}, e:{c:1, r:6}} */
    /* ws['!sort'] = { ref:"C2:C6" } */

		XLSX.utils.book_append_sheet(wb, ws, `${PaletNumber}`);
		/* generate XLSX file and send to client */
		XLSX.writeFile(wb, `${PaletNumber}.xlsx`)
    /* console.log(first_worksheet) */
    resetArray();
  };
  useEffect(() => {
    const delayArray = setTimeout(() => {
      setPaletArray(array => [...array, input]);
      document.getElementById('inputField').select();
      setImage(false);
    }, 1000);
    setImage(true);
    return () => clearTimeout(delayArray);
  }, [input]);
  return (
    <div className="paletMode">
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
