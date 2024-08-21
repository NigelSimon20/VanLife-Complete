import React from 'react'
import van4 from '../img/van2.png'
import Carinfo from '../Components/Carinfo'

const Dreamfinder = () => {
  return (
    <div>
         <Carinfo
        image={van4}
        heading="Dreamfinder"
        price="$65"
        firstbtn="Simple"
        paragraph="Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated."
      />
    </div>
  )
}

export default Dreamfinder