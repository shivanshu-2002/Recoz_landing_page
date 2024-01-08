import React from 'react'
import ReactStars from "react-rating-stars-component";

const EmployeeTestimonial = ({ item }) => {
  return (
    <div className=' hover:shadow-xl bg-[#B9BFBCC0] rounded-lg flex flex-col gap-4 hover:scale-105 transition-[2s] py-3 mx-3 my-3 border-gray-200 border-[1px]'>
      <div className='w-[120px] bg-rose-700 overflow-hidden rounded-full mx-auto h-[120px] object-fit'>
        <img src={item.image} alt='image' className='w-[180px] h-full object-cover' />
      </div>
      <div className='w-[80%] mx-auto text-center h-[40%] leading-6'>
        {item.description.length > 50 ? `${item.description.substring(0, 90)}...` : item.description}
      </div>
      <div className='flex flex-col text-center items-center justify-center mt-5'>
        <div>{item.position}</div>
        <div className='font-semibold font-lg'>{item.name}</div>
        <div>
          <ReactStars
            count={5}
            value={item.rating}
            size={28}
            activeColor="#FFBC3F"
            edit={false} // Set to false to make the stars read-only
          />
        </div>
      </div>
    </div>
  )
}

export default EmployeeTestimonial