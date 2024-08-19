import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Reviews = (props) => {
  return (
    <div>
      <div className="space-x-1 pb-2">
        <FontAwesomeIcon icon={faStar} className="text-[#FF8C38]" />
        <FontAwesomeIcon icon={faStar} className="text-[#FF8C38]" />
        <FontAwesomeIcon icon={faStar} className="text-[#FF8C38]" />
        <FontAwesomeIcon icon={faStar} className="text-[#FF8C38]" />
        <FontAwesomeIcon icon={faStar} className="text-[#FF8C38]" />
      </div>
      <div className="flex space-x-2 pb-2">
        <p className="font-semibold">{props.name}</p>
        <p className="text-[#8C8C8C]">{props.date}</p>
      </div>
      <p className="text-xs pb-5 font-semibold">{props.description}</p>
      <hr />
    </div>
  );
};

export default Reviews;
