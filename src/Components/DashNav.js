// src/Components/DashNav.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const DashNav = () => {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="flex space-x-4 pt-20 pb-5 font-variant text-lightGray p-5">
      {/* Link And Hover Div */}
      <div className="flex flex-col">
        <Link
          to="/Dashboard"
          className={activeLink === "Dashboard" ? "font-bold" : ""}
          onClick={() => handleLinkClick("Dashboard")}
        >
          Dashboard
        </Link>
        {location.pathname === "/Dashboard" && (
          <div className="border-b-2 border-lightGray w-19"></div>
        )}
      </div>
        
      {/* Link And Hover Div */}
      <div className="flex flex-col">
        <Link
          to="/Income"
          className={activeLink === "Income" ? "font-bold" : ""}
          onClick={() => handleLinkClick("Income")}
        >
          Income
        </Link>
        {location.pathname === "/Income" && (
          <div className="border-b-2 border-lightGray w-15"></div>
        )}
      </div>
          
      {/* Link And Hover Div */}
      <div className="flex flex-col">
        <Link
          to="/Vans"
          className={activeLink === "Vans" ? "font-bold" : ""}
          onClick={() => handleLinkClick("Vans")}
        >
          Vans
        </Link>
        {location.pathname === "/Vans" && (
          <div className="border-b-2 border-lightGray w-13"></div>
        )}
      </div>

      {/* Link And Hover Div */}
      <div className="flex flex-col">
        <Link
          to="/Reviews"
          className={activeLink === "Reviews" ? "font-bold" : ""}
          onClick={() => handleLinkClick("Reviews")}
        >
          Reviews
        </Link>
        {location.pathname === "/Reviews" && (
          <div className="border-b-2 border-lightGray w-17"></div>
        )}
      </div>
    </div>
  );
};

export default DashNav;
