import React from "react";
import Months from "./Months";
import Numbers from "./Numbers";

const Barchart = () => {
  return (
    <div className="relative mb-5">
      {/* Numbers Component */}
      <Numbers amount='5k'/>
      <Numbers amount='4k'/>
      <Numbers amount='$3k'/>
      <Numbers amount='$2k'/>
      <Numbers amount='$1k'/>
      <Numbers amount='$0k'/>
      <div className="absolute bottom-0 left-[58px]">
        {/* Months Component */}
        <Months />
      </div>
    </div>
  );
};

export default Barchart;