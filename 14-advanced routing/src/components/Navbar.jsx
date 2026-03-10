import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex py-4 items-center px-8 bg-cyan-900 justify-between">
      <h2 className="text-2xl font-bold">Sneha Mishra</h2>
      <div className="flex gap-10">
        <NavLink
          className={({ isActive }) =>
            `text-lg font-medium transition-colors ${
              isActive ? "text-cyan-300" : "text-white hover:text-cyan-200"
            }`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `text-lg font-medium transition-colors ${
              isActive ? "text-cyan-300" : "text-white hover:text-cyan-200"
            }`
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `text-lg font-medium transition-colors ${
              isActive ? "text-cyan-300" : "text-white hover:text-cyan-200"
            }`
          }
          to="/courses"
        >
          Courses
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `text-lg font-medium transition-colors ${
              isActive ? "text-cyan-300" : "text-white hover:text-cyan-200"
            }`
          }
          to="/product"
        >
          Product
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
