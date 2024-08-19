import React from "react";


const Home = () => {
  return (
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
          <button className="bg-[#FF8C38] text-white w-full md:w-[25%] rounded-xl p-3 font-semibold">
            Find your van
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
