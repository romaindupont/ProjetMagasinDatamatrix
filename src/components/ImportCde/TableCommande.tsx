/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-plusplus */
import Thead from './Thead';
import Tbody from './Tbody';

interface TableCommandeProps {
  cssStyle: any[];
  listCommande: string[];
  onClick: (e: React.SyntheticEvent) => void;
}

const TableCommande: React.FC<TableCommandeProps> = ({
  listCommande,
  cssStyle,
}) => {
  const deleteFirstRow = () => {
    document.getElementById('ordersTable')!.deleteRow(0);
    document.querySelector<HTMLElement>('.refresh')!.style.display = 'none';
    document.querySelector<HTMLElement>('.test')!.style.display = 'block';
  };
  return (
    <>
      <div className="tableau">
        <table id="tableOrder">
          <Thead listCommande={listCommande} />
          <tbody id="ordersTable">
            {listCommande.map((list, i) =>
              <Tbody key={i} listCommande={list} cssStyle={cssStyle}/>
            )}
          </tbody>
        </table>
      </div>
      <button
        className="chargement--button refresh"
        type="button"
        onClick={deleteFirstRow}
      >
        Rafraichir
      </button>
    </>
  );
};

export default TableCommande;
