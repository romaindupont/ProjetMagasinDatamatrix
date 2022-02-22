import { MemoryRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import FlashMode from 'components/FlashMode';
import PaletMode from 'components/PaletMode';
import FlashMenu from 'components/FlashMenu';
import FlashLabel from 'components/FlashLabel';
import FlashControl from 'containers/Planning/FlashControl';
import Planning from 'containers/Planning';
import ImportCde from '../containers/ImportCde';
import Settings from 'components/Settings';
import Moq from 'containers/Planning/Settings/Moq';
import AiZone from 'containers/Planning/Settings/AiZone';
import Orders from 'containers/Planning/Settings/Orders';
import FlashLogo from '../../assets/flashLogo.png';
import InsertBdd from '../../assets/insertionbdd.png';
import PlanningImage from '../../assets/planning.png';
import SettingsImage from '../../assets/machine.png';

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <Link to="/importCommande" rel="noreferrer" className="lien">
          <img src={InsertBdd} alt="Logo flashage colis" />
          <p>Importation Commande</p>
        </Link>
        <Link to="/planning" rel="noreferrer" className="lien">
          <img src={PlanningImage} alt="Logo flashage palette" />
          <p>Planning</p>
        </Link>
        <Link to="/flash" rel="noreferrer" className="lien">
          <img src={FlashLogo} alt="Logo flashage colis" />
          <p>Menu Flash</p>
        </Link>
        <Link to="/settings" rel="noreferrer" className="lien">
          <img src={SettingsImage} alt="Logo reglages" />
          <p>Settings</p>
        </Link>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Hello} />
        <Route path="/flashingMode" component={FlashMode} />
        <Route path="/paletFlash" component={PaletMode} />
        <Route path="/flashLabel" component={FlashLabel} />
        <Route path="/flash" component={FlashMenu} />
        <Route path="/importCommande" component={ImportCde} />
        <Route path="/planning" component={Planning} />
        <Route path="/flashControl/:id" component={FlashControl} />
        <Route path="/settings" component={Settings} />
        <Route path="/moqChange" component={Moq} />
        <Route path="/aiList" component={AiZone} />
        <Route path="/orders" component={Orders} />
      </Switch>
    </Router>
  );
}
;
