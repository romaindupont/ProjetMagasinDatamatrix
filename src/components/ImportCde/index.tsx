/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
/* eslint-disable prefer-destructuring */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
import BackToMenu from '../BackToMenu';
import TableCommande from '../../containers/ImportCde/TableCommande';
import { notification } from '../../utils/notification';
import './style.scss';

interface ImportCdeProps {
  importCommande: (lien: string) => void;
  listCommande: any[];
  verifyCode: (reference: string) => void;
  importBdd: (
    reference: string,
    quantity: string,
    dateNeed: string,
    numeroCde: string
  ) => void;
  cssStyle: string[];
  onClick: (e: React.SyntheticEvent) => void;
  file: OrdersList[];
  orders: OrdersList[];
}

interface OrdersList {
 name: string;
 path: string;
 lastModified: Date;
 lastModifiedDate: string;
 size: number;
 type: string;
 webkitRelativePath: string;
}

const ImportCde: React.FC<ImportCdeProps> = ({ importCommande, listCommande, verifyCode, cssStyle, importBdd }) => {
  const chargeOrder = () => {
    document.getElementById('charger')?.click();
  };
  const changeInputFile  = () => {
    const file = (document.getElementById('charger')as HTMLInputElement)!.files;
    for (let i = 0; i < file!.length; i++) {
      const preview = document.querySelector('.preview');
      preview!.textContent = file![i].name;
      importCommande(file![i].path);
    }
  };
  const importClic = () => {
    const arrayTr = [];
    const tr = document.querySelectorAll('tr');
    arrayTr.push(tr);
    for (let i = 1; i < arrayTr[0].length; i++) {
      if (arrayTr[0][i].cells[6] === undefined){
        notification('Des lignes n\'existe pas');
      } else {
        verifyCode(arrayTr[0][i].cells[6].innerHTML);
      }

    }
    document.querySelector<HTMLElement>('.test')!.style.display = 'none';
    document.querySelector<HTMLElement>('.import')!.style.display = 'block';
  };
  const importation = () => {
    const arrayTr = [];
    const tr = document.querySelectorAll('tr');
    arrayTr.push(tr);
    for (let i = 1; i < arrayTr[0].length; i++) {
      if (arrayTr[0][i].cells[6] === undefined) {
        notification('Des lignes n\'existe pas');
      } else {
        importBdd(
          arrayTr[0][i].cells[6].innerHTML,
          arrayTr[0][i].cells[9].innerHTML,
          arrayTr[0][i].cells[10].innerHTML,
          arrayTr[0][i].cells[5].innerHTML
        );
      }
    }
  };
  return (
    <div className="importCde">
      <BackToMenu to="/"/>
      <h2 className="importCde-title">Importation des commandes</h2>
      <form className="importCde-chargement">
        <p className="chargement--title">
          Importer les commandes (fichier CSV)
        </p>
        <>
          <button
            className="chargement--button"
            onClick={chargeOrder}
            type="button"
          >
            Charger
          </button>
          <div className="preview" />
          <input
            className="chargement--input"
            type="file"
            name="charger"
            id="charger"
            accept=".csv"
            onChange={changeInputFile}
          />
        </>
      </form>
      {listCommande.length === 0 ? (
        <div>wait For Files </div>
      ) : (
        <TableCommande cssStyle={cssStyle}/>
      )}
      <button type="button" className="chargement--button test" onClick={importClic}>
				Test
			</button>
        <button type="button" className="chargement--button import" onClick={importation}>
				Importer
			</button>
        {cssStyle.map((css: any, i: number) =>
          <div key={i} className={css.style}>{css.reference}</div>
        )}
    </div>
  );
};

export default ImportCde;
