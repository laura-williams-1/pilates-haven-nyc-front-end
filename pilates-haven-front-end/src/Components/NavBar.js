import pilatesLogo from "../Assests/Pilates-studio-logo.png";
import { Link } from "react-router-dom";

import "./NavBar.css";
const NavBar = () => {
  return (
    <nav className="nav-div">
      <img src={pilatesLogo} alt="pilatesHaven" />
      <Link to="/studios">
        <button>Home</button>
      </Link>

      <Link to="/studios/new">
        <button>Add a Studio</button>
      </Link>
      <Link to="/studios/about">
        <button>About</button>
      </Link>
    </nav>
  );
};

export default NavBar;
