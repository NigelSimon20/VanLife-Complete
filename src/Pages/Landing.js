import React from "react";
import "../App.css";
import AnimatedPages from "./AnimatedPages";


const Landing = () => {
  return (
    <AnimatedPages>
      <div>
        <section className=" container mx-auto bg space-y-5 p-5 md:space-y-5 text-white flex flex-col justify-center items-center md:max-w-3xl">
          <h1 className="font-bold text-3xl md:text-5xl">
            You got the travel plans, we got the travel vans.
          </h1>
          <p>
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <button className="bg-[#FF8C38] text-white w-full rounded-md p-3 font-semibold">
            Find your van
          </button>
        </section>
      </div>
    </AnimatedPages>
  );
};

export default Landing;
