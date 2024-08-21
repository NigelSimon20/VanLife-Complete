import React from 'react'

const Months = () => {
  return (
    <div className='flex space-x-4 items-end pb-[2px]'>
        {/* July to December BarChart Data */}
      <div className='flex flex-col'>
        <div className='bg-lighterPink h-[178px] w-[32px] rounded-t-md'></div>
        <p className='font-semibold text-center '>JU</p>
      </div>
      <div className='flex flex-col'>
        <div className='bg-lighterPink h-[60px] w-[32px] rounded-t-md'></div>
        <p className='font-semibold text-center'>AU</p>
      </div>
      <div className='flex flex-col'>
        <div className='bg-lighterPink h-[135px] w-[32px] rounded-t-md'></div>
        <p className='font-semibold text-center'>SE</p>
      </div>
      <div className='flex flex-col'>
        <div className='bg-lighterPink h-[120px] w-[32px] rounded-t-md'></div>
        <p className='font-semibold text-center'>OC</p>
      </div>
      <div className='flex flex-col'>
        <div className='bg-orange h-[70px] w-[32px] rounded-t-md'></div>
        <p className='font-semibold text-center'>NO</p>
      </div>
      <div className='flex flex-col'>
        <div className='bg-orange h-[25px] w-[32px] rounded-t-md'></div>
        <p className='font-semibold text-center'>DE</p>
      </div>
    </div>
  )
}

export default Months