import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AnimatedPages from "../Pages/AnimatedPages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactCard, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AnimatedPages>
      <div className="sticky top-0 flex justify-between items-center h-[10vh] shadow-md bg-[#FFF7ED]">
        {/* Logo */}
        <NavLink to="/Home">
          <h1 className="font-bold text-2xl pl-9">#CarRental</h1>
        </NavLink>

        {/* Hamburger Menu Icon for Small Screens */}
        <div className="pr-9 md:hidden">
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} onClick={toggleMenu} className="cursor-pointer" />
        </div>

        {/* Menu Links */}
        <div className={`space-x-3 font-semibold text-[#4D4D4D] pr-9 hidden md:flex`}>
          <NavLink to="/SignUp">Host</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Vans">Vans</NavLink>
          <FontAwesomeIcon icon={faContactCard} />
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-[10vh] left-0 w-full bg-[#FFF7ED] flex flex-col items-center space-y-4 py-4 md:hidden z-10 shadow-lg">
            <NavLink to="/SignUp" onClick={toggleMenu}>Host</NavLink>
            <NavLink to="/About" onClick={toggleMenu}>About</NavLink>
            <NavLink to="/Vans" onClick={toggleMenu}>Vans</NavLink>
            <FontAwesomeIcon icon={faContactCard} />
          </div>
        )}
      </div>
    </AnimatedPages>
  );
};

export default Navbar;
