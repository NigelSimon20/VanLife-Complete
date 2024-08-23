import React from 'react'

const Months = () => {
  return (
    <div className='flex space-x-3 items-end pb-[3px]'>
        {/* July to December BarChart Data */}
      <div className='flex flex-col'>
        <div className='bg-lighterPink h-[160px] md:h-[193px] w-[32px] rounded-t-md'></div>
        <p className='font-semibold text-center '>JU</p>
      </div>
      <div className='flex flex-col'>
        <div className='bg-lighterPink h-[60px] md:h-[70px] md:  w-[32px] rounded-t-md'></div>
        <p className='font-semibold text-center'>AU</p>
      </div>
      <div className='flex flex-col'>
        <div className='bg-lighterPink h-[120px] md:h-[145px] w-[32px] rounded-t-md'></div>
        <p className='font-semibold text-center'>SE</p>
      </div>
      <div className='flex flex-col'>
        <div className='bg-lighterPink h-[105px]  md:h-[130px] w-[32px] rounded-t-md'></div>
        <p className='font-semibold text-center'>OC</p>
      </div>
      <div className='flex flex-col'>
        <div className='bg-orange h-[60px] md:h-[75px] w-[32px] rounded-t-md'></div>
        <p className='font-semibold text-center'>NO</p>
      </div>
      <div className='flex flex-col'>
        <div className='bg-orange h-[25px] md:h-[30px] w-[32px] rounded-t-md'></div>
        <p className='font-semibold text-center'>DE</p>
      </div>
    </div>
  )
}

export default Months