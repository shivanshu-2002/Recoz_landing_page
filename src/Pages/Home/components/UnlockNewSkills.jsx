import React, { useState } from 'react'
import ExplorePlatform_corousel from '../../../components/Corousel/Corousel'
import img1 from '../../../assets/31f683e5258887ae35673ad56ef6af9c.jpg';
import img2 from '../../../assets/73f820fb2cca49e965b6471e87b6d78a.jpg';
import img3 from '../../../assets/courseImg3.jpg';


const UnlockNewSkills = () => {
  const [items, setItems] = useState(
    [
      {
        heading:'Web Development Mastery',
        price: '₹ 60,000',
        paragraph: 'Lorem ipsum dolor sit amet consectetur. Sed condimentum at natoque ultrices tempor faucibus. Amet ac egestas lobortis lectus. Felis ',
        imgLink:img1
      },
     {
      heading:'UI/UX Designing',
      price:'₹ 49,000',
      paragraph:'Lorem ipsum dolor sit amet consectetur. Sed condimentum at natoque ultrices tempor faucibus. Amet ac egestas lobortis lectus. Felis ',
      imgLink:img2
     },
     {
      heading:'App Development with React Native',
      price:'₹ 99,000',
      paragraph:'Lorem ipsum dolor sit amet consectetur. Sed condimentum at natoque ultrices tempor faucibus. Amet ac egestas lobortis lectus. Felis ',
      imgLink:img3
     }, {
      heading:'Web Development Mastery',
      price: '₹ 60,000',
      paragraph: 'Lorem ipsum dolor sit amet consectetur. Sed condimentum at natoque ultrices tempor faucibus. Amet ac egestas lobortis lectus. Felis ',
      imgLink:img1
    },
   {
    heading:'UI/UX Designing',
    price:'₹ 49,000',
    paragraph:'Lorem ipsum dolor sit amet consectetur. Sed condimentum at natoque ultrices tempor faucibus. Amet ac egestas lobortis lectus. Felis ',
    imgLink:img2
   },
   {
    heading:'App Development with React Native',
    price:'₹ 99,000',
    paragraph:'Lorem ipsum dolor sit amet consectetur. Sed condimentum at natoque ultrices tempor faucibus. Amet ac egestas lobortis lectus. Felis ',
    imgLink:img3
   }
    ]
  );
  return (
    <div className='w-[100%] flex items-center  justify-center my-5 bg-white '>
            <div className='w-[95%]  shadow-xl   flex items-center justify-center flex-col gap-2 '>
            {/* hEADING */}
                    <div className='w-[90%] flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0'>
                         <div className='flex flex-col gap-2 sm:gap-2'>
                          <div className='sm:text-[40px] text-[26px] leading-7 sm:leading-9 font-[700] text-black '>Unlock New Skills with our Courses</div>
                          <div className='text-[19px] sm:text-[24px] font-[500] text-[#6E6E73] leading-7 sm:leading-9 '>Learn and Grow at your own pace.</div>
                         </div>
                         <div className='bg-[#007AFF] text-white p-2 w-[265px] text-center rounded-md'>Explore More</div>
                    </div>
                      {/* COROUSEL PART */}
                    <div className='w-[100%]   py-4 rounded-lg shadow-lg overflow-hidden ' data-aos="zoom-in-left">
                             <ExplorePlatform_corousel items={items} cardType={'Course'}/>
                    </div>
            </div> 
    </div>
  )
}

export default UnlockNewSkills