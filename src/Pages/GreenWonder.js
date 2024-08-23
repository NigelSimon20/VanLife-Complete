import React from 'react'
import van6 from '../img/van6.png'
import Carinfo from '../Components/Carinfo'

const GreenWonder = () => {
  return (
    <div>
          <Carinfo
        image={van6}
        heading="Green Wonder"
        price="$70"
        firstbtn="Rugged"
        paragraph="With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere."
      />
    </div>
  )
}

export default GreenWonder