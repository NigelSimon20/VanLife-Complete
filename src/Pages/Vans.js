import React, { useState } from "react";
import Vans from "../Components/Vans";
import Picture1 from "../img/van1.png";
import Picture2 from "../img/van3.png";
import Picture3 from "../img/van2.png";
import Picture4 from "../img/van6.png";
import Picture5 from "../img/van4.png";
import Picture6 from "../img/van5.png";
import { NavLink } from "react-router-dom";

const Explore = () => {
  const [filter, setFilter] = useState("All");

  // All Vans data
  const vans = [
    {
      Picture: Picture1,
      Heading: "Modest Explorer",
      Price: "$60",
      Day: "/day",
      Button: "Simple",
      bgColor: "green",
      path: "/ModestExplorer",
    },
    {
      Picture: Picture2,
      Heading: "Beach Bum",
      Price: "$80",
      Day: "/day",
      Button: "Rugged",
      bgColor: "black",
      path: "/BeachBum",
    },
    {
      Picture: Picture3,
      Heading: "Reliable Red",
      Price: "$100",
      Day: "/day",
      Button: "Luxury",
      bgColor: "black",
      path: "/ReliableRed",
    },
    {
      Picture: Picture4,
      Heading: "Dreamfinder",
      Price: "$65",
      Day: "/day",
      Button: "Simple",
      bgColor: "black",
      path: "/Dreamfinder",
    },
    {
      Picture: Picture5,
      Heading: "The Cruiser",
      Price: "$125",
      Day: "/day",
      Button: "Luxury",
      bgColor: "black",
      path: "/TheCruiser",
    },
    {
      Picture: Picture6,
      Heading: "Green Wonder",
      Price: "$70",
      Day: "/day",
      Button: "Rugged",
      bgColor: "black",
      path: "/GreenWonder",
    },
  ];

  
  const filteredVans = vans.filter((van) =>
    filter === "All" ? true : van.Button === filter
  );

  return (
    <div className="flex flex-col font-variant pl-5 md:pl-10">
      {/* Explore Page H2 */}
      <h2 className="font-bold text-2xl mb-3 md:mb-6 md:text-4xl text-lightGray">
        Explore our van options
      </h2>
      {/* Explore Page Top Buttons */}
      <div className="flex space-x-2 mb-9 md:space-x-5 text-lightGray items-center">
        <button
          className="text-sm py-1 px-3 md:py-2 md:px-4 md:text-3xl bg-lightPink rounded-md hover:bg-reddish hover:text-lightPink transition duration-300"
          onClick={() => setFilter("Simple")}
        >
          Simple
        </button>
        <button
          className="text-sm py-1 px-3 md:py-2 md:px-4 md:text-3xl bg-lightPink rounded-md hover:bg-black hover:text-lightPink transition duration-300"
          onClick={() => setFilter("Luxury")}
        >
          Luxury
        </button>
        <button
          className="text-sm py-1 px-3 md:py-2 md:px-4 md:text-3xl bg-lightPink rounded-md hover:bg-green hover:text-lightPink transition duration-300"
          onClick={() => setFilter("Rugged")}
        >
          Rugged
        </button>
        <NavLink
          to="/Vans"
          className="text-sm md:text-3xl"
          onClick={() => setFilter("All")}
        >
          Clear filters
        </NavLink>
      </div>
      {/* Component Div */}
      <div className="flex flex-wrap">
       
        {filteredVans.map((van, index) => (
          <Vans
            key={index}
            Picture={van.Picture}
            Heading={van.Heading}
            Price={van.Price}
            Day={van.Day}
            Button={van.Button}
            bgColor={van.bgColor}
            path={van.path}
          />
        ))}
      </div>
    </div>
  );
};

export default Explore;
