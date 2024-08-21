import React from 'react'
import Lists from '../Components/Lists'
import one from '../img/van1.png'
import two from '../img/van2.png'
import three from '../img/van3.png'

function List() {
  return (
    <div>
      <Lists Title="Your listed vans" image={one} Make="Modest Explorer" Costs="$60/day"/>
      <Lists image={two} Make="Beach Bun" Costs="$80/day"/>
      <Lists image={three} Make="Green Wonder" Costs="$70/day"/>
    </div>
  )
}

export default List
