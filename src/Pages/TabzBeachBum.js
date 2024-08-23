import React from "react";
import Tabs from "../Components/Tabz";
import One from "../img/van2.png";
import two from '../img/van2.png'
import VanDetails from "../Components/VanDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const TabzBeachBum = () => {
  return (
    <div className="bg-lighterPink p-5 ">
      <Link to='/Dashboard'>
        <div className="flex pb-4 space-x-3 items-center">
          <FontAwesomeIcon icon={faArrowLeft} />
          <p>Back to all vans</p>
        </div>
      </Link>

      <VanDetails
        image={two}
        firstbtn="Rugged"
        heading="Beach Bum"
        price="$80"
      />
      <Tabs
        image={One}
        name="Beach Bum"
        category="Rugged"
        price="$80"
        description="Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper."
      />
    </div>
  );
};

export default TabzBeachBum;
