import React from "react";
import { Link } from "react-router-dom";

const Vans = (props) => {
  return (
    <div className="font-variant w-1/2 lg:w-1/3 mb-3">
      {/* Van Image */}
      <Link to={props.path}>
        <img
          className=" rounded-md h-[70%] w-[90%] md:w-[90%] lg:w-[90%] md:h-[70%]"
          src={props.Picture}
          alt=""
        />
      {/* Van Info Div */}
      <div className="flex justify-between pt-1 w-[90%] h-[14%] lg:w-[90%] md:h-[10%]">
        {/* Van Info */}
        <p className="font-bold text-md md:text-3xl ">{props.Heading}</p>
        {/* Div With price and day */}
        <div>
          <p className="font-bold text-xs pt-1 md:text-2xl">{props.Price}</p>
          <p className="text-[10px] flex justify-end hover:line-black md:text-lg">
            {props.Day}
          </p>
        </div>
      </div>
      {/* Button */}
      <button
        className={` bg-${props.bgColor} py-1 px-4 text-xs rounded-md text-white font-semibold md:text-2xl md:py-2 md:px-6  `}
      >
        {props.Button}
      </button>
      </Link>
    </div>
  );
};

export default Vans;