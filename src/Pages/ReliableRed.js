import React from "react";
import van3 from '../img/van3.png'
import Carinfo from '../Components/Carinfo'

const ReliableRed = () => {
  return (
    <div>
      <Carinfo
        image={van3}
        heading="Reliable Red"
        price="$100"
        firstbtn="Luxury"
        paragraph="Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it."
      />
    </div>
  );
};

export default ReliableRed;
