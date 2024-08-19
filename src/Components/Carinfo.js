import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";


const Carinfo = (props) => {
  return (
    <div className=" container mx-auto max-w-md space-y-5 bg-lightPink p-6 mb-8 font-variant md:max-w-full">
      {/* Back Arrow */}
      <div className="space-x-3">
        <FontAwesomeIcon icon={faArrowLeft} />
        <NavLink>Back to all vans</NavLink>
        
      </div>

      <div className="md:flex space-y-5 md:space-x-6">
        {/* Picture of selected car */}
        <div>
          <img src={props.image} className=" rounded-md" alt="" />
        </div>

        <div className="md:flex-col space-y-5 ml-0">
          {/*Small Button */}
          <button className="font-semibold pl-5 pr-5 pt-2 pb-2 rounded-md bg-darkOrange text-white ">
            {props.firstbtn}
          </button>

          {/* Heading */}
          <h2 className="font-bold text-3xl">{props.heading}</h2>

          {/* Price */}
          <div className="flex">
            <p className="font-bold text-1xl">{props.price}</p>
            <p>/day</p>
          </div>

          {/* Paragraph */}
          <p>{props.paragraph}</p>

          {/* Big button */}
          <button className="bg-lightOrange text-white font-semibold w-full md:w-[30%] rounded-md p-2">
            Rent this van
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carinfo;
