import React from "react";
import { NavLink } from "react-router-dom";
import AnimatedPages from "../Pages/AnimatedPages";

const Navbar = (props) => {
  return (
    <AnimatedPages>
    <div className=" sticky top-0 flex justify-between font-variant items-center h-[10vh] shadow-md  bg-[#FFF7ED]">
      <NavLink to='/Home'>
        <h1 className="font-bold text-2xl pl-9">#CarRental</h1>
      </NavLink>
      <div className="space-x-3 font-semibold text-[#4D4D4D] pr-9">
        <NavLink to="/Host">{props.link}</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Vans">Vans</NavLink>
      </div>
    </div>
    </AnimatedPages>
  );
};

export default Navbar;
