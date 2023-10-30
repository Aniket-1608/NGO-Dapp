import Navbar from './Navbar';
// ...
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
        <img
              src={require("./asset/logo.jpg")}
              alt="social media"
              loading="lazy"
              width={100}
            />
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;