import React from 'react'

function Lists(props) {
  return (
    <div>
      <div className='bg-[#FFF7ED] flex flex-col justify-center'>
      <h1 className='font-bold text-4xl ml-7'>{props.Title}</h1>
        <div className="flex rounded-md bg-white items-center w-3/4 ml-7 mt-4">
                <div className="round-md">
                    <img src={props.image} alt="" className='w-[70px] p-2 md:p-0 overflow-hidden  md:w-1/2 '/>
                </div>
            <div>
                <h3 className='font-bold md:text-4xl lg:text-6xl flex lg:ml-[-400px] md:ml-[-250px]'>{props.Make}</h3>
                <p className='block text-gray-400 md:text-2xl lg:text-1xl lg:ml-[-400px] md:ml-[-250px]'>{props.Costs}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Lists
