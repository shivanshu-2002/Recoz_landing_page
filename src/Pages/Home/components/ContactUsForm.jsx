import React, { useState } from 'react';

const ContactForm = () => {

  return (
    <div className="w-[100%] h-full  text-white flex flex-col items-start justify-start gap-5  rounded-md ">
      <div className='  h-[10%] text-3xl text-black font-semibold text-center sm:text-start'>Fill The Form</div>
      <form className='w-[100%] flex flex-col sm:gap-5 gap-3'>
        <div className='flex sm:flex-row flex-col items-center justify-center sm:gap-2 gap-3'>
          <div className='sm:w-[50%] w-[100%]  border-2 rounded-md'>
            <input type='text' placeholder='FirstName' className='bg-inherit border-none p-2 w-full text-xl ' />
          </div>
          <div className='sm:w-[50%] w-[100%]  border-2 rounded-md'>
            <input type='text' placeholder='LastName' className='bg-inherit border-none p-2 w-full text-xl ' />
          </div>
        </div>
        <div className='w-[100%] sm:gap-2 gap-3 flex sm:flex-row flex-col justify-between'>
          <div className='sm:w-[50%] w-[100%]  border-2 rounded-md'>
            <input type='text' placeholder='Email' className='bg-inherit border-none p-2 w-full text-xl ' />
          </div>
          <div className='sm:w-[50%] w-[100%]  border-2 rounded-md'>
            <input type='text' placeholder='Phone Number' className='bg-inherit text-black border-none p-2 w-full text-xl ' />
          </div>
        </div>
        <div className='w-[100%] border-2 h-[173px] sm:h-[204px] rounded-md'>
          <input
            type='text'
            placeholder='Message'
            className='bg-inherit border-none p-2 w-full h-full text-xl placeholder-top'
          />
        </div>
        <div className='w-[100%] h-[15%] flex justify-center items-center'>
          <div className='bg-[#2A2A2A] rounded-md flex items-center hover:bg-blue-900 cursor-pointer justify-center text-white w-[137px] h-[46px] text-lg'>Submit Now</div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;