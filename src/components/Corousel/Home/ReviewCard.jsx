import React from 'react'
import ReactStars from "react-rating-stars-component";

const ReviewCard = ({ item }) => {
    return (
        <div className='shadow-md py-3 rounded-lg my-3 hover:shadow-lg hover:scale-105 transition-[2s] mx-3 px-2 flex flex-col gap-2 border-gray-200 border-[1px]'>
            <div className=' w-[90%] mx-auto flex flex-row items-center justify-start gap-5'>
                <div className='w-[72px] h-[72px] rounded-full overflow-hidden'>
                    <img src={item.imgLink} className='w-full h-full object-cover' alt='Your Image' />
                </div>
                <div>
                    <div className='text-[24px] font-[500]'>{item.name}</div>
                    <div className='text-[16px] font-[400] text-gray-700'>{item.Profession}</div>
                </div>
            </div>

            <div className='w-[90%] mx-auto flex justify-start gap-4 items-center'>
                <div className='flex items-center justify-center' >
                    <ReactStars
                        count={5}
                        value={item.rating}
                        size={28}
                        activeColor="#007AFF"
                        edit={false} // Set to false to make the stars read-only
                    />
                </div>
                <div className='flex item-center justify-center text-[16px] font-[500]'>{item.rating}/5</div>
            </div>

            <div className='w-[90%] mx-auto text-[24px] font-[500] text-black'>{item.review}</div>

            <div className='w-[90%] mx-auto text-[14px] font-[400] text-[#6E6E73]'>{item.paragraph}</div>
        </div>
    )
}

export default ReviewCard