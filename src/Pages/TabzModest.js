import React from "react";
import Tabs from "../Components/Tabz";
import One from "../img/van1.png";
import VanDetails from "../Components/VanDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const TabzModest = () => {
  return (
    <div className="bg-lighterPink p-5 ">
      <Link to="/Dashboard">
        <div className="flex pb-4 space-x-3 items-center">
          <FontAwesomeIcon icon={faArrowLeft} />
          <p>Back to all vans</p>
        </div>
      </Link>

      <VanDetails
        image={One}
        firstbtn="Simple"
        heading="Modest Explorer"
        price="$60"
      />
      <Tabs
        image={One}
        name="Modest Explorer"
        category="Simple"
        price="$60"
        description="The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
      />
    </div>
  );
};

export default TabzModest;
