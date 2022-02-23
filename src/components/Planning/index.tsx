/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from 'react-router-dom';
import BackToMenu from 'components/BackToMenu';
import Table from './Table';
import './style.scss';

interface PlanningProps {
  dateFinder: (FrenchDateFormat: string) => void;
  listDelivery: string[];
  id: number;
  saveIdDelivery: () => void;
}

const Planning: React.FC<PlanningProps> = ({
  dateFinder,
  listDelivery,
  id,
  saveIdDelivery,
}) => {
  const onDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateToFind = `${e.target.value.substring(
      8,
      10
    )}/${e.target.value.substring(5, 7)}/${e.target.value.substring(0, 4)}`;
    dateFinder(dateToFind);
  };
  return (
    <div className="importCde">
      <BackToMenu to="/" onClick={function (): void {
        throw new Error('Function not implemented.');
      } }/>
      <div className="datePicker">
        <label htmlFor="deliveryDate">Date Livraison à afficher :</label>
        <input
          id="deliveryDate"
          type="date"
          style={{ textAlign: 'center' }}
          onChange={onDateChange}
        />
      </div>
      <div className="tableauLivraison">
        {listDelivery.length === 0 ? (
          <div>wait For Files </div>
        ) : (
          <Table listDelivery={listDelivery} saveIdDelivery={saveIdDelivery} />
        )}
      </div>
      <Link to={`/flashControl/${id}`} rel="noreferrer" className="flash">
        <p>Flash</p>
      </Link>
    </div>
  );
};
export default Planning;
