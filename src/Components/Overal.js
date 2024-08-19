import React from "react";

const Overal = (props) => {
  return (
    <div>
      <div className="flex space-x-4 items-center  ">
        <p className="text-sm">{props.overall}</p>
        <div className="bg-[#B9B9B9] h-1 w-[61%] rounded-md"></div>
        <p className="text-sm">{props.percentage}</p>
      </div>
    </div>
  );
};

export default Overal;
