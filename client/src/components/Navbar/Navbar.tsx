import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <div>
      <div className="hidden md:flex items-center justify-between">
        {/* lOGO */}
        <h1 className="text-white font-bold tracking-wider uppercase">
          Fin <span className="bg-blue-600 rounded-md px-1">Sight</span>
        </h1>
        {/* lINKS */}
        <div className="flex justify-center items-center text-white font-bold uppercase gap-6">
          <NavLink to={"/"}>
            <p>Dashboard</p>
          </NavLink>
          <NavLink to={"/predictions"}>
            <p>Predictions</p>
          </NavLink>
        </div>
      </div>
      {/* MobileMenu */}
      <div className="block md:hidden">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
