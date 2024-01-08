import React from 'react'

const CourseCard = ({ item }) => {
    return (
        <div className=' hover:scale-105 my-3 cursor-pointer hover:shadow-2xl transition-[2s] rounded-lg   mx-3 border-gray-200 border-[1px]'>
            <div className='flex flex-col w-[90%] mx-auto items-start   mb-2  justify-between py-3 '>
            <div className='text-black font-[400] text-[12px]'>{item.heading}</div>
                <div className='text-black font-[500] text-[28px]'>{item.price}</div>
                <div className='text-[#6E6E73] leading-5 font-[400] text-[18px]'>{item.paragraph}</div>
            </div>
            <div className='w-full h-[50%] bg-red-700 overflow-hidden rounded-b-2xl'>
                <img src={item.imgLink} className='w-full h-[200px] object-cover ' alt='Your Image' />
            </div>
        </div>
    )
}

export default CourseCard