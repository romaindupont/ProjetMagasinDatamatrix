import { MemoryRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import FlashMode from 'components/FlashMode';
import FlashLogo from '../../assets/flashLogo.png';
import PaletLogo from '../../assets/palet.png';

const Hello = () => {
  return (
    <div>
      <h1>Magasin Flash Code</h1>
      <div className="Hello">
        <Link to="/flashingMode" rel="noreferrer" className="lien">
          <img src={FlashLogo} alt="Logo flashage colis" />
          <p>Flashage Colis</p>
        </Link>
        <Link to="/paletFlash" rel="noreferrer" className="lien">
          <img src={PaletLogo} alt="Logo flashage palette" />
          <p>Flashage Palette</p>
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
        <Route path="/paletFlash" component={Hello} />
      </Switch>
    </Router>
  );
}

