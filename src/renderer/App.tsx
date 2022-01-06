import { MemoryRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import FlashMode from 'components/FlashMode';
import PaletMode from 'components/PaletMode';
import FlashLabel from 'components/FlashLabel';
import FlashLogo from '../../assets/flashLogo.png';
import PaletLogo from '../../assets/palet.png';

const Hello = () => {
  return (
    <div>
      <h1>Magasin Flash Code</h1>
      <div className="Hello">
        <Link to="/flashingMode" rel="noreferrer" className="lien">
          <img src={FlashLogo} alt="Logo flashage colis" />
          <p>Fabrication Etiquette</p>
        </Link>
        <Link to="/paletFlash" rel="noreferrer" className="lien">
          <img src={PaletLogo} alt="Logo flashage palette" />
          <p>Flashage Palette</p>
        </Link>
        <Link to="/flashLabel" rel="noreferrer" className="lien">
          <img src={FlashLogo} alt="Logo flashage colis" />
          <p>Etiquettes Spécifiques</p>
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
      </Switch>
    </Router>
  );
}
