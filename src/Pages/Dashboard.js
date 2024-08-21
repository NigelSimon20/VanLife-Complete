import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Component from "../Components/Component";
import one from "../img/van1.png";
import two from "../img/van2.png";
import three from "../img/van3.png";
// import Tabz from "../Components/Tabz"
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import List from "./List";
import { Link } from "react-router-dom";
import Barchart from "../Components/BarChart";
import Amount from "../Components/Amount";
import Overal from "../Components/Overal";
import Reviews from "../Components/Reviews";


function Tabs(props) {
  const [activeTab, setActiveTab] = useState(0);
  const [user, setUser] = useState(null); // State to hold user info

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const images = [
    {
      src: one,
      alt: "first van",
      type: "Modest Explorer",
      customize: "Edit",
      prices: "$60/day",
    },
    {
      src: two,
      alt: "second van",
      type: "Beach Bum",
      customize: "Edit",
      prices: "$80/day",
    },
    {
      src: three,
      alt: "third van",
      type: "Green Wonder",
      prices: "$70/day",
      customize: "Edit",
    },
  ];

  const tabs = ["Dashboard", "Income", "Vans", "Reviews"];
  const content = [
    <div className="font-variant bg-[#fff7ed]">
      <div className="py-5 bg-[#FFEAD0]">
        <h1 className="mt-10 ml-5 text-2xl font-variant font-bold">
          Welcome{user ? `, ${user.displayName || user.email}` : "!"}
        </h1>
        <div className="flex mt-3 ml-5 text-xs lg:flex-wrap lg:justify-end lg:mr-6 lg:text-sm">
          <p>Income last</p>
          <p className="ml-1 font-variant font-bold">30 days</p>
          <p className="font-bold ml-[195px]">Details</p>
        </div>
        <h2 className="mt-2 ml-5 text-4xl font-inters font-bold">$2,260</h2>
      </div>
      <div className="flex p-5 py-10 text-xs text-center bg-[#FFDDB2] lg:justify-between lg:text-sm">
        <div className="flex lg:flex lg:items-center">
          <h1 className="text-[13px] font-variant font-bold pt-1">
            Review score
          </h1>
          <FontAwesomeIcon
            icon={faStar}
            className="mt-1 ml-5 text-xs text-[#FF8C38]"
          />
          <p className="pt-1 pl-1 font-variant font-bold">5.0</p>
          <p className="pt-1 font-variant">/5</p>
        </div>
        <div>
          <p className="pt-1 font-inters ml-[153px]">Details</p>
        </div>
      </div>
      <div className="flex justify-between px-6 py-10">
        <h1 className="text-xl font-bold">Your listed vans</h1>
        <p className="flex text-xs sm:ml-40 font-bold lg:flex">View all</p>
      </div>

      <Component images={images} />
    </div>,

    <div className="w-full">
         <div className="space-y-3 font-variant text-lightGray p-5">
      {/* Income Heading */}
      <h2 className="font-bold text-2xl pb-2">Income</h2>

      {/* Income dates breakdown */}
      <div className="flex space-x-1">
        <p className="text-xs">Last</p>
        <div className="flex flex-col">
          <Link className="font-semibold text-xs">30 days</Link>
          <hr className="bg-lightGray" />
        </div>
      </div>

      {/* Amount */}
      <h2 className="font-extrabold text-3xl">$2,260</h2>

      {/* BarChart And Transactions Div */}
      <div className="flex flex-col space-y-3 md:w-[80%] lg:w-[50%]">
        {/* Barchart */}
        <Barchart />

        {/* Transactions Breakdown */}
        <div className="flex justify-between">
          <p className="font-bold text-[18px]">Your transactions (3)</p>
          <div className="flex space-x-1 items-center">
            <p className="text-xs">Last</p>
            <div className="flex flex-col">
              <Link className="font-semibold text-xs ">30 days</Link>
              <hr className="bg-lightGray" />
            </div>
          </div>
        </div>

        {/* Amounts And Dates */}
        <Amount amount='$720' date={"1/12/22"} />
        <Amount amount='$560' date={"10/11/22"} />
        <Amount amount='$980' date={"23/11/22"} />
      </div>
    </div>
    </div>,

    <div>
      <List/>
    </div>,

    
       <div className="p-5 space-y-2 bg-[#FFF7ED] font-variant">
      <div className="flex space-x-2 items-baseline">
        <h1 className="font-bold text-2xl">Your reviews</h1>
        <p>last 30 days</p>
      </div>
      <div className="flex space-x-1 items-center">
        <h2 className="font-bold text-2xl ">5.0</h2>
        <FontAwesomeIcon icon={faStar} className="text-[#FF8C38]" />
        <p>overall rating</p>
      </div>
      <div className="flex space-x-4 items-center ">
        <p className="text-sm">5 stars</p>
        <div className="bg-[#FF8C38] h-1 w-[61%] rounded-md"></div>
        <p className="text-xs">100%</p>
      </div>
      <Overal overall="4 stars" percentage="0%" />
      <Overal overall="3 stars" percentage="0%" />
      <Overal overall="2 stars" percentage="0%" />
      <Overal overall="1 stars" percentage="0%" />

      <h3 className="font-bold pt-3">Reviews (2)</h3>
      <div className="flex space-x-1">
        
      </div>
      <Reviews
        name="Elliot"
        date="December 1, 2022"
        description="The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!"
      />
      <Reviews
        name="Sandy"
        date="November 23, 2022"
        description="This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!"
      />
    </div>,
  ];

  return (
    <div
      className={`w-full mx-auto mt-10 px-4 sm:px-6 lg:px-8 ${props.style} bg-lightPink mt-[0px]`}
    >
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
