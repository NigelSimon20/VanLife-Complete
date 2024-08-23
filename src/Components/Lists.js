import React from "react";
import { Link } from "react-router-dom";

function Lists(props) {
  return (
    <Link to={props.path}> 
      <div className="bg-[#FFF7ED] flex flex-col md:flex font-variant">
        <h1 className="font-bold text-3xl pb-4">{props.Title}</h1>
        <div className="flex rounded-md bg-white items-center p-2 space-x-2 md:p-4">
          <div className=" w-[20%] md:w-[10%]  ">
            <img
              src={props.image}
              alt=""
              className="rounded-md "
            />
          </div>
          <div>
            <h3 className="font-bold md:text-2xl">
              {props.Make}
            </h3>
            <p className="block text-gray-400 md:text-2xl lg:text-1xl">
              {props.Costs}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Lists;
