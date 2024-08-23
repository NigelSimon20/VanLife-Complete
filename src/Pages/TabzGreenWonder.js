import React from "react";
import two from '../img/van6.png'
import VanDetails from "../Components/VanDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Tabs from "../Components/Tabz";

const TabzGreenWonder = () => {
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
        heading="Green Wonder"
        price="760"
      />
        <Tabs
          image={two}
          name="Green Wonder"
          category="Rugged"
          price="$70"
          description="With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere."
        />
      </div>

  );
};

export default TabzGreenWonder;
