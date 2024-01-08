import React from 'react'
import bannerImg from '../../../assets/Banner.jpg'

const Banner = () => {
    return (
        <div className='w-[100%] bg-white p-2  flex items-center justify-center '>
            <div className='w-[100%]  flex flex-col items-center justify-center'>
                <div className='w-[95%]   flex flex-col gap-3  sm:flex-row-reverse'   > 
                    {/* Image */}
                    <div className='sm:w-[50%]' data-aos="zoom-out-up">
                        <img src={bannerImg} />
                    </div>
                    {/* Text */}
                    <div className='sm:w-[50%]  sm:px-5 py-2 flex items-center' data-aos="fade-right">
                        <div className='sm:w-[73%] flex flex-col justify-center sm:gap-5 gap-3'>
                            <div className='sm:text-[40px] text-[28px] font-bold sm:leading-[45px] leading-8 '>Discover Top Tech Professionals in Minutes</div>
                            <div className='text-[#6E6E73] sm:text-[24px] text-[20px] font-[500]  leading-6'>Streamline your business with <span className='font-bold'>Ricoz’s</span> All-in-one tech services hub!</div>
                            <div className='w-[100%] flex items-center justify-center  py-2'>
                                <div className='w-[50%] py-[14px] text-center sm:px-[40px] rounded-lg text-white bg-black text-sm'>Get Started</div>
                                <div className='w-[50%] text-center underline text-blue-700'>Learn More</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Data ...CLient Project and Accuracy */}
                <div className='w-[100%]  py-2 sm:flex sm:flex-col sm:mt-[-8px] sm:items-end'>
                    <div className='w-[100%]  bg-[#F5F5F7] flex flex-col sm:w-[55%] sm:py-4 sm:px-6 sm:justify-between  sm:flex-row gap-3 '>
                        <div className='flex flex-col items-center justify-center '>
                            <div className='font-bold text-[40px] text-[#2A2A2A]'>20K+</div>
                            <div className='font-[400] text-[20px] text-gray-600'>Completed Projects</div>
                        </div>
                        <div className='flex flex-col items-center '>
                            <div className='font-bold text-[40px] text-[#2A2A2A]'>300K+</div>
                            <div className='font-[400] text-[20px] text-gray-600'>Satisfied Clients</div>
                        </div>
                        <div className='flex flex-col items-center py-2'>
                            <div className='font-bold text-[40px] text-[#2A2A2A]'>99.3%</div>
                            <div className='font-[400] text-[20px] text-gray-600'>Accuracy Rate</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Banner