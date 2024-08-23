import React from "react";
import Lists from "../Components/Lists";
import one from "../img/van1.png";
import two from "../img/van2.png";
import three from "../img/van6.png";

function List() {
  return (
    <div>
      <Lists
        Title="Your listed vans"
        image={one}
        Make="Modest Explorer"
        Costs="$60/day"
        path="/TabzModest"
      />
      <Lists image={two} Make="Beach Bum" Costs="$80/day" path="/TabzBeachBum" />
      <Lists image={three} Make="Green Wonder" Costs="$70/day" path="/TabzGreenWonder"/>
    </div>
  );
}

export default List;
