import React from 'react'
import van5 from  '../img/van5.png'
import Carinfo from '../Components/Carinfo'

const TheCruiser = () => {
  return (
    <div>
         <Carinfo
        image={van5}
        heading="The Cruiser"
        price="$120"
        firstbtn="Luxury"
        paragraph="The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go."
      />
    </div>
  )
}

export default TheCruiser