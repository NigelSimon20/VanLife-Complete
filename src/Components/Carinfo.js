import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import AnimatedPages from "../Pages/AnimatedPages";

const Carinfo = (props) => {
  return (
    <AnimatedPages>
      <div className=" container mx-auto max-w-md space-y-5 bg-lightPink p-6 mb-8 font-variant md:max-w-full">
        {/* Back Arrow */}
        <div className="space-x-3 flex items-center ">
          <NavLink to="/Vans">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faArrowLeft} />
              <p> Back to all vans</p>
            </div>
          </NavLink>
        </div>

        <div className="md:flex space-y-5 md:space-x-6">
          {/* Picture of selected car */}
          <div>
            <img src={props.image} className=" rounded-md" alt="" />
          </div>

          <div className="md:flex-col md:flex md:justify-center space-y-5 ml-0">
            {/*Small Button */}
            <button className="font-semibold px-5 md:px-2 py-2 md:w-[12%] rounded-md bg-darkOrange text-white ">
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
            <Link to="/SignUp">
              <div className="bg-lightOrange text-white font-semibold w-full md:w-[40%] rounded-md p-2 text-center">
                <button>Rent this van</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </AnimatedPages>
  );
};

export default Carinfo;
