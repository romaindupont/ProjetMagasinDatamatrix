import { Link } from 'react-router-dom';
import BackToMenu from '../BackToMenu';
import FlashLogo from '../../../assets/flashLogo.png';
import PaletLogo from '../../../assets/palet.png';

const FlashMenu = () => {
  return (
    <div>
      <BackToMenu to="/" />
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

export default FlashMenu;
