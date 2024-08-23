import React from "react";
import Image from "../img/image 55.png";
import { Link } from "react-router-dom";
import AnimatedPages from "./AnimatedPages";

function Main() {
  return (
    <AnimatedPages>
      <div>
        <img src={Image} alt="" className="w-full" />
        <div className="flex flex-col p-4 md:flex-row md:p-15 lg:p-20 font-variant">
          <div>
            <h2 className="font-bold text-3xl md:w-2/3">
              Don’t squeeze in a sedan when you could relax in a van.
            </h2>
            <p className="font-lightBold mt-5 md:w-2/3">
              Our mission is to enliven your road trip with the perfect travel
              van rental. Our vans are recertified before each trip to ensure
              your travel plans can go off without a hitch. (Hitch costs extra
              😉)
            </p>
            <p className=" mt-3 md:w-2/3 ">
              Our team is full of vanlife enthusiasts who know firsthand the
              magic of touring the world on 4 wheels.
            </p>
          </div>
          <div className=" rounded-md bg-[#FFCC8D] mt-10 p-3 md:w-2/3 md:p-10 md:mt-2">
            <h3 className="font-bold text-2xl">Your destination is waiting.</h3>
            <h3 className="font-bold text-2xl">Your van is ready.</h3>
            <Link to="/Vans">
              <button className="bg-[#161616] rounded-md font-semibold text-[white] p-3 mt-5">
                Explore our vans
              </button>
            </Link>
          </div>
        </div>
      </div>
    </AnimatedPages>
  );
}

export default Main;
