import React from 'react';
import img from '../../../assets/working-pana-rHK.png'

const WhyChooseRezok = () => {
  const TimeLine = [
    {
      Logo: 1,
      Heading: 'Vast Professional Network',
      Description: 'Lorem ipsum dolor sit amet consectetur. Sapien urna cursus sed eu ornare feugiat. Et eget quis sit.',
    }, {
      Logo: 2,
      Heading: 'Vast Professional Network',
      Description: 'Lorem ipsum dolor sit amet consectetur. Sapien urna cursus sed eu ornare feugiat. Et eget quis sit.',
    },
    {
      Logo: 3,
      Heading: 'Vast Professional Network',
      Description: 'Lorem ipsum dolor sit amet consectetur. Sapien urna cursus sed eu ornare feugiat. Et eget quis sit.',
    },
    {
      Logo: 4,
      Heading: 'Vast Professional Network',
      Description: 'Lorem ipsum dolor sit amet consectetur. Sapien urna cursus sed eu ornare feugiat. Et eget quis sit.',
    }
  ];

  return (
    <div className='p-3 mt-10 flex flex-col w-full bg-[#F5F5F7] gap-3'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <div className='text-black text-4xl font-semibold text-center'>Why Choose Ricoz?</div>
        <div className='text-[#6E6E73] text-center leading-6 text-lg font-medium'>
          We are here to redefine the way you do your business
        </div>
      </div>
      <div className='flex sm:w-[90%] mx-auto flex-col sm:flex-row overflow-hidden'>
        {/* Image */}
        <div className='p-2 my-3 sm:w-[50%] ' data-aos="fade-left">
          <img src={img} alt='Working at Ricoz' />
        </div>
        {/* The Side Panel */}
        <div className='flex w-full sm:w-[50%]   items-center justify-center mx-auto' data-aos="fade-right">
        <div className='flex flex-col  sm:ml-10 sm:mt-4  p-[1px] items-center justify-center sm:gap-2 '>
            {TimeLine.map((ele, i) => (
              <div className='flex flex-col ' key={i}>
                <div className='flex gap-5' key={i}>
                  <div className='w-[60px] h-[60px] text-[#7B7B7C] bg-gray-200 rounded-full flex justify-center items-center shadow-[#00000012]'>
                    {ele.Logo}
                  </div>
                  <div className='w-[80%] '>
                    <h2 className='text-black text-[18px] sm:text-[24px] font-[500]'>{ele.Heading}</h2>
                    <p className='text-[#6E6E73] text-[12px] sm:text-[14px] font-[400] leading-4 '>{ele.Description}</p>
                  </div>
                </div>
                <div
                  className={`${
                    TimeLine.length - 1 === i ? 'hidden' : 'lg:block'
                  } h-14 sm:h-11 border-dotted border-r ml-[4px] border-gray-800 bg-gray-400/0 w-6`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseRezok;
