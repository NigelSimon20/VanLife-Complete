import React from "react";

function Component(props) {  
  return (  
    <div className='flex flex-wrap justify-between mx-5 text-xs  '>  
      {props.images.map((image) => (  
        <div key={image.src} className='flex px-5 py-5 mb-4 bg-white rounded-xl w-[370px]'>
          <div>  
          <img src={image.src} alt={image.alt} className='w-20 rounded-md' />
          </div>   
          <div className='flex flex-col mt-1 ml-2'> 
            <p className='w-[130px]'>{image.type}</p>
            <p className='font-bold'>{image.prices}</p> 
          </div>
          <div className="flex items-center justify-center ml-5 text-center ">
          <p className="flex pl-[90px] font-inters">{image.customize}</p>  
          </div>
        </div>  
      ))}  
    </div>  
  );  
}  

export default Component; 

