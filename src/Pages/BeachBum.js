import React from 'react'
import van6 from '../img/van2.png'
import Carinfo from '../Components/Carinfo'

const BeachBum = () => {
  return (
    <div>
        <Carinfo
        image={van6}
        heading="Beach Bum"
        price="$80"
        firstbtn="Rugged"
        paragraph="Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper."
        />
      
    </div>
  )
}

export default BeachBum