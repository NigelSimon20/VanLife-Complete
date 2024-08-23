import React from "react";

const Carinfo = (props) => {
  return (
    <div className=" container mx-auto max-w-md space-y- bg-white  p-4 font-variant md:max-w-full">

      <div className="flex space-y-5 space-x-3 items-center">
        {/* Picture of selected car */}
        <div className="w-[40%] md:w-[25%]">
          <img src={props.image} className=" rounded-md" alt="" />
        </div>

        <div className="md:flex-col md:flex md:justify-center space-y-2 ml-0">
          {/*Small Button */}
          <button className="font-semibold px-4 md:px-2 py-2 md:w-[40%]  rounded-md bg-darkOrange text-white text-xs">
            {props.firstbtn}
          </button>

          {/* Heading */}
          <h2 className="font-bold text-[20px] md:text-3xl">{props.heading}</h2>

          {/* Price */}
          <div className="flex">
            <p className="font-bold text-1xl md:text-2xl">{props.price}</p>
            <p>/day</p>
          </div>

          {/* Paragraph */}
          <p>{props.paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default Carinfo;
