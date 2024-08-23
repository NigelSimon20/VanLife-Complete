import React, { useState } from "react";

function Tabs(props) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Details", "Pricing", "Photos"];
  const content = [
    <div className="font-variant space-y-5">
      <h1 className="mb-2">
        <span className="font-bold">Name: </span> {props.name}
      </h1>
      <h1 className="mb-2">
        <span className="font-bold">Category: </span> {props.category}
      </h1>
      <h1 className="mb-2">
        <span className="font-bold">Description :</span>
        {props.description}
      </h1>
      <h1>
        <span className="font-bold">Visibility: </span>Public
      </h1>
    </div>,
    <div className="w-full">
      <h1 className="h-[auto] w-[100%]">
        <span className="font-bold">{props.price}</span>/day
      </h1>
    </div>,
    <div>
      <img src={props.image} alt="" className="w-1/3" />
    </div>,
  ];

  return (
    <div className={`  ${props.style} bg-white`}>
     
      <div className="flex sm:flex-row pl-4 space-x-5">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2   transition-colors duration-300 ${
              activeTab === index
                ? "border-b-2 border-black text-black"
                : "border-b-2 border-transparent text-gray-500"
            } focus:outline-none`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="w-full p-4 text-sm sm:text-base md:text-lg lg:text-xl">
        {content[activeTab]}
      </div>
    </div>
  );
}

export default Tabs;
