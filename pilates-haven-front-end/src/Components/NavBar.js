import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <Link>
        <button to="/studios">Home</button>
      </Link>

      <Link>
        <button to="/studios/new">Add a Studio</button>
      </Link>
    </nav>
  );
};

export default NavBar;
