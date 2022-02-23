import { Link } from 'react-router-dom';
import BackToMenu from 'components/BackToMenu';
import './style.scss';

const Settings = () => {
  return (
    <div>
      <BackToMenu to="/" onClick={function (): void {
        throw new Error('Function not implemented.');
      } }/>
      <div>Settings Menu</div>
      <div className="settings">
        <Link to="/moqChange" rel="noreferrer" className="lien">
          <p className="lien-settings">MOQ</p>
        </Link>
        <Link to="/aiList" rel="noreferrer" className="lien">
          <p className="lien-settings">AI</p>
        </Link>
        <Link to="/orders" rel="noreferrer" className="lien">
          <p className="lien-settings">Orders</p>
        </Link>
      </div>
    </div>
  );
};

export default Settings;
