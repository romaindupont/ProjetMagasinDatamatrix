import { Link } from 'react-router-dom';

interface BackToMenuProps {
  to: string;
}

const BackToMenu: React.FC<BackToMenuProps> = ({ to }) => {
  return (
    <Link to={to} rel="noreferrer" className="backMenu">
      <p>Menu</p>
    </Link>
  );
};

export default BackToMenu;
