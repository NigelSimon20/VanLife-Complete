import React from "react";
import { Link } from "react-router-dom";

function Component(props) {
  return (
    <div className="flex flex-col text-xs md:text-lg px-5 ">
      {props.images.map((image) => (
        <div
          key={image.src}
          className="flex p-5 mb-4 bg-white rounded-xl justify-between"
        >
          <div className="flex space-x-2">
            <img src={image.src} alt={image.alt} className="w-20 rounded-md" />
            <div className="flex flex-col justify-center space-y-1 md:space-y-0">
              <p className="font-bold text-[18px]">{image.type}</p>
              <p className="font-semibold">{image.prices}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Link className="flex font-bold text-[15px]">{image.customize}</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Component;
