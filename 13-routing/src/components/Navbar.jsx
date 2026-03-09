import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <h3>React Router Demo</h3>
      <div>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          About
        </NavLink>
        <NavLink
          to="/product"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Product
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
