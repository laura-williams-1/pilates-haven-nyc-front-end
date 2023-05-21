import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <Link to="/studios">
        <button>Home</button>
      </Link>

      <Link to="/studios/new">
        <button>Add a Studio</button>
      </Link>
    </nav>
  );
};

export default NavBar;
