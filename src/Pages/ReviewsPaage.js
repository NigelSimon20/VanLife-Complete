import React from "react";
import Reviews from "../Components/Reviews";
import Overal from "../Components/Overal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ReviewsPaage = () => {
  return (
    <div className="p-5 space-y-2 bg-[#FFF7ED] font-variant">
      <div className="flex space-x-2 items-baseline">
        <h1 className="font-bold text-2xl">Your reviews</h1>
        <p>last 30 days</p>
      </div>
      <div className="flex space-x-1 items-center">
        <h2 className="font-bold text-2xl ">5.0</h2>
        <FontAwesomeIcon icon={faStar} className="text-[#FF8C38]" />
        <p>overall rating</p>
      </div>
      <div className="flex space-x-4 items-center ">
        <p className="text-sm">5 stars</p>
        <div className="bg-[#FF8C38] h-1 w-[61%] rounded-md"></div>
        <p className="text-xs">100%</p>
      </div>
      <Overal overall="4 stars" percentage="0%" />
      <Overal overall="3 stars" percentage="0%" />
      <Overal overall="2 stars" percentage="0%" />
      <Overal overall="1 stars" percentage="0%" />

      <h3 className="font-bold pt-3">Reviews (2)</h3>
      <div className="flex space-x-1">
        
      </div>
      <Reviews
        name="Elliot"
        date="December 1, 2022"
        description="The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!"
      />
      <Reviews
        name="Sandy"
        date="November 23, 2022"
        description="This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!"
      />
    </div>
  );
};

export default ReviewsPaage;
