import React from "react";

const Amount = (props) => {
  return (
    <div className="flex justify-between p-4 bg-white">
      <p className="font-bold text-2xl">{props.amount}</p>
      <p>{props.date}</p>
    </div>
  );
};

export default Amount;