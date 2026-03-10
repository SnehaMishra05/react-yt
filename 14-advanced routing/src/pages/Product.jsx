import { NavLink, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className="py-8">
      <div className="flex justify-center gap-4 mb-8">
        <NavLink
          className={({ isActive }) =>
            `px-6 py-3 rounded-lg font-semibold transition-colors ${
              isActive
                ? "bg-cyan-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`
          }
          to="/product/men"
        >
          Men
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `px-6 py-3 rounded-lg font-semibold transition-colors ${
              isActive
                ? "bg-cyan-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`
          }
          to="/product/women"
        >
          Women
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `px-6 py-3 rounded-lg font-semibold transition-colors ${
              isActive
                ? "bg-cyan-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`
          }
          to="/product/kids"
        >
          Kids
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Product;
