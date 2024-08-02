import React from "react";
import "../App.css";
// import Carinfo from "../Components/Carinfo";
// import van1 from "../img/van1.png";
// import van2 from "../img/van2.png";
// import van3 from "../img/van3.png";
// import van4 from "../img/van4.png";
// import van5 from "../img/van5.png";
// import van6 from "../img/van6.png";

const Landing = () => {
  return (
    <div>
      <section className=" container mx-auto bg space-y-5 p-5 md:space-y-5 text-white flex flex-col justify-center items-center md:max-w-3xl">
        <h1 className="font-bold text-3xl md:text-5xl">
          You got the travel plans, we got the travel vans.
        </h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <button className="bg-[#FF8C38] text-white w-full rounded-md p-3 font-semibold">
          Find your van
        </button>
      </section>
      {/* <Carinfo
        image={van1}
        heading="Modest Explorer"
        price="$60"
        firstbtn="Simple"
        paragraph="The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
      />
      <Carinfo
        image={van2}
        heading="Modest Explorer"
        price="$60"
        firstbtn="Rugged"
        paragraph="The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
      />
      <Carinfo
        image={van3}
        heading="Modest Explorer"
        price="$60"
        firstbtn="Simple"
        paragraph="The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
      />
      <Carinfo
        image={van4}
        heading="Modest Explorer"
        price="$60"
        firstbtn="Simple"
        paragraph="The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
      />
      <Carinfo
        image={van5}
        heading="Modest Explorer"
        price="$60"
        firstbtn="Simple"
        paragraph="The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
      />
      <Carinfo
        image={van6}
        heading="Modest Explorer"
        price="$60"
        firstbtn="Simple"
        paragraph="The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
      /> */}
    </div>
  );
};

export default Landing;
