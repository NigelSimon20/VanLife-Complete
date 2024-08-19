import React from "react";
import Carinfo from "../Components/Carinfo";
import van1 from '../img/van1.png'


const ModestExplorer = () => {
  return (
    <div>
      <Carinfo
        image={van1}
        heading="Modest Explorer"
        price="$60"
        firstbtn="Simple"
        paragraph="The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
      />
    </div>
  );
};

export default ModestExplorer;
