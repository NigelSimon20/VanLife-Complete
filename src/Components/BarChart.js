import React from "react";
import Months from "./Months";
import Numbers from "./Numbers";

const Barchart = () => {
  return (
    <div className="relative mb-5 ">
      {/* Figures Component */}
      <Numbers amount='5k'/>
      <Numbers amount='4k'/>
      <Numbers amount='$3k'/>
      <Numbers amount='$2k'/>
      <Numbers amount='$1k'/>
      <Numbers amount='$0k'/>
      <div className="absolute bottom-1 md:bottom-[-4px] left-[50px] md:left-[80px]">
        {/* Months Component */}
        <Months />
      </div>
    </div>
  );
};

export default Barchart;