import React, { useState } from 'react'
import l1 from '../../../assets/aboutUs/culture1.jpg';
import l2 from '../../../assets/aboutUs/culture2.jpg';
import r1 from '../../../assets/aboutUs/culture3.jpg';
import r2 from '../../../assets/aboutUs/culture4.jpg'
import Corousel from '../../../components/Corousel/Corousel'

import testi1 from '../../../assets/aboutUs/testi1.png'
import testi2 from '../../../assets/aboutUs/testi2.png'
import testi3 from '../../../assets/aboutUs/testi3.png'

const Culture = () => {
     const [item,setItem] = useState([
        {
          name: 'John Doe',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          rating: 5,
          position: 'Software Engineer',
          image: testi1, // Replace with the actual image path
        },
        {
          name: 'Jane Smith',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          rating: 4,
          position: 'UX Designer',
          image: testi2, // Replace with the actual image path
        },
        {
          name: 'Bob Johnson',
          description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          rating: 4.5,
          position: 'Marketing Specialist',
          image: testi3, // Replace with the actual image path
        },
        {
          name: 'John Doe',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          rating: 5,
          position: 'Software Engineer',
          image: testi1, // Replace with the actual image path
        },
        {
          name: 'Jane Smith',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          rating: 4,
          position: 'UX Designer',
          image: testi2, // Replace with the actual image path
        },
        {
          name: 'Bob Johnson',
          description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          rating: 4.5,
          position: 'Marketing Specialist',
          image: testi3, // Replace with the actual image path
        },
     ])
  return (
    <div className='sm:w-[80%] w-[90%] mx-auto h-full pb-8  text-black'>
      {/* Heading */}
      <div className='sm:text-[48px] text-4xl text-center sm:text-start font-[500] font-SFPRODISPLAYREGULAR sm:my-3 border-b-2 sm:inline-block text-purple-900 border-black py-2'>Our Culture</div>
      {/* Paragraphs */}
      <div className='flex flex-col gap-8 mt-5'>
        <div className='flex flex-col gap-2' data-aos="fade-up">
          <div className='text-[25px] font-bold text-purple-900'>Our Values</div>
          <div className='text-[20px] leading-7 font-[400] w-[95%]'>At Makeup hub, we uphold the values of integrity, collaboration, and continuous improvement in everything we do.</div>
        </div>
        <div className='flex flex-col gap-2 text-[20px]' data-aos="fade-up">
          <div className='font-bold text-[25px] text-purple-900'>Integrity:</div>
          <div className='font-[400]  w-[95%]'>At Makeup hub , we believe in conducting ourselves with the utmost integrity. We are committed to maintaining high ethical standards in our interactions with customers, suppliers, and each other. We value honesty, transparency, and trustworthiness in all aspects of our business.</div>
        </div>
        <div className='flex flex-col gap-2 text-[20px]' data-aos="fade-up">
          <div className='font-bold text-[25px] text-purple-900'>Collaboration:</div>
          <div className='font-[400]  w-[95%]'>Collaboration is at the heart of our organization. We foster a collaborative work environment where everyone's ideas and contributions are valued. We encourage teamwork and open communication, recognizing that diverse perspectives lead to better outcomes. We believe that by working together, we can achieve greater success.</div>
        </div>
        <div className='flex flex-col gap-2 text-[20px]' data-aos="fade-up">
          <div className='font-bold text-[25px] text-purple-900'>Continuous Improvement: </div>
          <div className='font-[400]  w-[95%]'>We are dedicated to continuous improvement in everything we do. We embrace a growth mindset and constantly seek ways to enhance our processes, products, and services. We encourage our employees to innovate, experiment, and learn from both successes and failures. We believe that continuous improvement is essential to staying competitive and providing the best possible experience for our customers.</div>
        </div>
      </div>
      {/* Photos */}
      <div className='w-[95%]  mt-7  flex flex-row gap-2'>
        <div className='w-[60%] flex flex-col gap-3  h-full' data-aos="fade-right">
          <div>
            <img src={l1} alt='img1' />
          </div>
          <div>
            <img src={l2} alt='img1' />
          </div>
        </div>
        <div className='w-[38%] flex flex-col gap-3  h-full' data-aos="fade-left">
          <div >
            <img src={r1} alt='img1' />
          </div>
          <div>
            <img src={r2} alt='img1' />
          </div>
        </div>
      </div>
      {/* Employee Testimonial */}
      <div className='mt-10' data-aos="fade-up">
         <div className='font-bold text-[25px] ml-[43px] '>Employee Testimonial</div>
            <Corousel items={item} cardType={"EmployeeTesti"}/>
      </div>
      {/* Bottom Paragraphs */}
      <div className='flex flex-col gap-8 mt-5' >
           <div className='flex flex-col gap-2 text-[20px]' data-aos="fade-right" >
                <div className='font-bold text-[25px] text-purple-900'>Work-Life Balance</div>
                <div className='font-[400]  w-[95%]'>We believe in maintaining a healthy work-life balance and offer flexible schedules and wellness programs to ensure our employees thrive both personally and professionally.</div>
           </div>
           <div className='flex flex-col gap-2 text-[20px]' data-aos="fade-left">
                <div className='font-bold text-[25px] text-purple-900'>Diversity and Inclusion</div>
                <div className='font-[400]  w-[95%]'>We foster an inclusive environment where diversity is celebrated, and all individuals are valued for their unique perspectives and contributions.</div>
           </div>
           <div className='flex flex-col gap-2 text-[20px]' data-aos="fade-right" >
                <div className='font-bold text-[25px] text-purple-900'>Career Development</div>
                <div className='font-[400]  w-[95%]'>At Makeup hub we invest in our employees' growth and offer training programs, mentorship opportunities, and clear career paths to help them achieve their professional goals.</div>
           </div>
           <div className='flex flex-col gap-2 text-[20px]' data-aos="fade-left">
                <div className='font-bold text-[25px] text-purple-900'>Social Responsibility</div>
                <div className='font-[400]  w-[95%]'>We are dedicated to giving back to our community and regularly participate in volunteering events and support local charities.</div>
           </div>
      </div>

    </div>
  )
}

export default Culture