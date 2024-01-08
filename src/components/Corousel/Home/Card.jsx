import React from 'react'

const Card = ({item}) => {
  return (
    <div className=' hover:shadow-xl rounded-lg  hover:scale-105 transition-[2s] py-3 mx-3 my-3 border-gray-200 border-[1px]'>
        <div className='flex gap-3 mb-2 items-center justify-start '>
          <div className='pl-2'>{item.logo}</div>
         <div className='text-[28px] font-500 text-[#2A2A2A] leading-7'>{item.heading}</div>
         </div>
         <div className='text-[#6E6E73] mt-2 pl-2 text-[18px] font-[400] leading-6 pr-2 sm:pr-10 py-4 '>{item.paragraph}</div>
    </div>
  )
}

export default Card