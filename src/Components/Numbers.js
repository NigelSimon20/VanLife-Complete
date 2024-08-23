import React from "react";

const Numbers = (props) => {
  return (
    <div className="">
      <div className="flex space-x-2 mb-5 mt-5 text-bold">
        {/* Amount breakdown $0k to $5k */}
        <p className="text-md mr-4 ">{props.amount}</p>
        <div className="border-b-2 border-lighterGray w-[25px] border-squared mb-[6px]"></div>
        <div className="border-b-2 border-lighterGray w-[25px] border-squared mb-[6px]"></div>
        <div className="border-b-2 border-lighterGray w-[25px] border-squared mb-[6px]"></div>
        <div className="border-b-2 border-lighterGray w-[25px] border-squared mb-[6px]"></div>
        <div className="border-b-2 border-lighterGray w-[25px] border-squared mb-[6px]"></div>
        <div className="border-b-2 border-lighterGray w-[25px] border-squared mb-[6px]"></div>
        <div className="border-b-2 border-lighterGray w-[25px] border-squared mb-[6px]"></div>
        <div className="border-b-2 border-lighterGray w-[25px] border-squared mb-[6px]"></div>
        <div className="border-b-2 border-lighterGray w-[25px] border-squared mb-[6px]"></div>
        <div className="border-b-2 border-lighterGray w-[25px] border-squared mb-[6px]"></div>
        <div className="border-b-2 border-lighterGray w-[25px] border-squared mb-[6px]"></div>
        <div className="border-b-2 border-lighterGray w-[25px] border-squared mb-[6px]"></div>
        <div className="border-b-2 border-lighterGray w-[25px] border-squared mb-[6px]"></div>
        <div className="border-b-2 border-lighterGray w-[25px] border-squared mb-[6px]"></div>
      </div>
    </div>
  );
};

export default Numbers;