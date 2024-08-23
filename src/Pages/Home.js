import React from "react";
import { Link } from "react-router-dom";
import AnimatedPages from "./AnimatedPages";

const Home = () => {
  return (
    <AnimatedPages>
      <div>
        <section className="bg   md:space-y-5 text-white flex flex-col justify-center">
          <div className="overlay p-5 flex flex-col justify-center items-center space-y-5 ">
            <div className="">
              <h1 className="font-bold text-3xl md:text-5xl md:items-center">
                You got the travel plans, we got the travel vans.
              </h1>
            </div>

            <p className="md:pb-5">
              Add adventure to your life by joining the #vanlife movement. Rent
              the perfect van to make your perfect road trip.
            </p>
            <Link
              to="/Vans"
              className="bg-[#FF8C38] text-white w-full md:w-[25%] rounded-md p-3 font-semibold text-center transition-transform transform active:scale-95 hover:scale-105"
            >
              <button>Find your van</button>
            </Link>
          </div>
        </section>
      </div>
    </AnimatedPages>
  );
};

export default Home;
