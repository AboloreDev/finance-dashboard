import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="text-white">
      <div className="" onClick={toggleMenu}>
        <Menu />
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed z-10 inset-0 bg-black bg-opacity-20 transition-opacity ${
          isOpen ? "opacity-60" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Slide-In Mobile Menu */}
      <div
        className={`fixed top-0 z-10 left-0 h-full bg-black w-64 p-6 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className=" font-bold text-xl text-center uppercase">
          Fin <span className="bg-blue-800 rounded-md px-1">Sight</span>
        </h1>

        <div className=" font-bold uppercase gap-3 flex flex-col mt-6">
          <NavLink to={"/"} onClick={toggleMenu}>
            <p>Dashboard</p>
          </NavLink>
          <NavLink to={"/predictions"} onClick={toggleMenu}>
            <p>Predictions</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
