import React, { useState } from "react";
import one from '../img/van1.png';

function Tabs(props) {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = ["Details", "Pricing", "Photos"];
    const content = [
        (
            <div>
                <h1 className="mb-2"><span className="font-bold">Name: </span> Modest Explorer</h1>
                <h1 className="mb-2"><span className="font-bold">Description :</span>The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!</h1>
                <h1><span className="font-bold">Visibility: </span>Public</h1>
            </div>
        ),
        (
            <div className="w-full">
                <h1 className="h-[auto] w-[100%]"><span className="font-bold">$60.00</span>/day</h1>
            </div>
        ),
        (
            <div>
                <img src={one} alt="" className="w-1/3" />
            </div>
        ),
    ];

    return (
        <div className={`w-full mx-auto mt-10 px-4 sm:px-6 lg:px-8 ${props.style} bg-white mt-[0px]`}>
            <div className="flex sm:flex-row justify-around">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`py-2 w-full text-center transition-colors duration-300 ${
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
