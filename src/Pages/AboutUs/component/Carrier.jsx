import React from 'react'
import { IoIosArrowBack } from "react-icons/io";


const Carrier = () => {
  return (
    <div className='sm:w-[80%] w-[90%] mb-5 text-black mx-auto text-[20px] flex flex-col gap-8 mt-5'>
      <div className='flex items-center justify-start gap-2'>
        <IoIosArrowBack size={28} />
        <div>View all jobs</div>
      </div>
      {/* Navbar */}
      <div className='p-2  w-full flex flex-col sm:flex-row'>
        <div className='sm:w-[75%]   flex flex-col gap-3'>
          <div className='sm:text-4xl text-2xl'>Flutter developer</div>
          <div className='flex sm:flex-row flex-col justify-start gap-2   items-start sm:items-center sm:gap-3'>
            <div className=' flex gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                <path d="M12.0833 10.8871L12.0954 10.8738M16.9167 10.8871L16.9288 10.8738M12.0833 15.7204L12.0954 15.7071M16.9167 15.7204L16.9288 15.7071M12.0833 20.5538L12.0954 20.5405M16.9167 20.5538L16.9288 20.5405M7.25 24.65V6.76667C7.25 6.57438 7.32638 6.38998 7.46235 6.25401C7.59831 6.11805 7.78272 6.04167 7.975 6.04167H14.5V4.35C14.5 4.15772 14.5764 3.97331 14.7123 3.83735C14.8483 3.70138 15.0327 3.625 15.225 3.625H21.025C21.2173 3.625 21.4017 3.70138 21.5377 3.83735C21.6736 3.97331 21.75 4.15772 21.75 4.35V24.65C21.75 24.8423 21.6736 25.0267 21.5377 25.1627C21.4017 25.2986 21.2173 25.375 21.025 25.375H7.975C7.78272 25.375 7.59831 25.2986 7.46235 25.1627C7.32638 25.0267 7.25 24.8423 7.25 24.65Z" stroke="black" stroke-width="1.8125" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <div className='text-[18px] sm:text-[20px]'>People - Facilities & Services - Business Partnering</div>
            </div>

            <div className='flex gap-2  sm:items-center sm:justify-center sm:gap-3'>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="26" viewBox="0 0 19 26" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 24.3596L10.3939 23.3525C11.4082 22.1909 12.3206 21.0889 13.1323 20.0407L13.8024 19.1568C16.6003 15.3875 18 12.3959 18 10.1847C18 5.46495 14.1948 1.63899 9.5 1.63899C4.80517 1.63899 1 5.46495 1 10.1847C1 12.3959 2.39967 15.3875 5.19758 19.1568L5.86767 20.0407C7.0257 21.5243 8.23728 22.9639 9.5 24.3596Z" stroke="black" stroke-width="1.41658" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.5026 13.6833C11.4586 13.6833 13.0443 12.0976 13.0443 10.1416C13.0443 8.18559 11.4586 6.59993 9.5026 6.59993C7.5466 6.59993 5.96094 8.18559 5.96094 10.1416C5.96094 12.0976 7.5466 13.6833 9.5026 13.6833Z" stroke="black" stroke-width="1.41658" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <div>Chennai</div>
            </div>

          </div>
        </div>
        <div className='sm:w-[25%] w-[200px] flex mt-2  sm:items-end sm:justify-center'>
          <div className='p-2 bg-[#0D2063] px-5 rounded-lg text-white font-semibold'>Apply Now</div>
        </div>

      </div>
      {/* Job Description */}
      <div className='w-[100%] mx-auto gap-5'>
        <div className='text-[25px] font-semibold text-purple-900'>Job Description :</div>
        <div>As a Flutter developer at Makeup hub, you will play a key role in developing our product strategy and driving the
          development and launch of new features and enhancements. You will work closely with cross-functional teams,
          including engineering, design, marketing, and customer support, to ensure the successful delivery of products that
          meet our customers' needs. Your responsibilities will include:
        </div>
      </div>
      {/* Job Requirement */}
      <div className='flex flex-col gap-2'>
        <li>Developing user interface components and implementing them by following well-known Flutter / Dart workflows and practices</li>
        <li>Communicating with product and engineering leads to implement business and project objectives.</li>
        <li>Code review of team members' commits as part of CI/CD cycle.</li>
        <li>Participate in testing, quality assurance and bug fixes as part of the CI/CD cycle.</li>
      </div>
      {/* Only Who can apply */}
      <div className='w-[100%] mx-auto gap-5 h-[40vh]'>
        <div className='text-[25px]  text-purple-900 font-bold'>Job Requirement :</div>
      </div>
      {/* Who can apply */}
      <div className='flex flex-col gap-4 '>
        <div className=' text-2xl text-purple-900 font-semibold'>Only those candidates can apply who:</div>
        <div className='flex flex-col gap-2'>
          <li>are available for the work from home job/internship</li>
          <li>can start the work from home job/internship between 13th Jul'23 and 17th Aug'23</li>
          <li>are available for duration of 3 months</li>
          <li>have relevant skills and interests</li>
        </div>
        <div className='sm:w-[25%] w-[200px]  flex items-end justify-start'>
          <div className='p-2 bg-[#0D2063] px-5 rounded-lg text-white font-semibold'>Apply Now</div>
        </div>
      </div>
      {/* Community */}
      <div className='sm:w-[90%] w-[95%] flex flex-col mt-10 p-4 gap-8 py-10 rounded-md mx-auto items-center justify-center bg-[#DBE7F2]'>
        <div className='text-[25px] font-[500]'>Join our company</div>
        <div className='w-[90%] text-center'>Join our talent pool by simply submitting your resume. We’ll inform you about the new jobs matching your profile and update you if you are the best fit for one of our open positions.</div>
        <div className='px-4 p-2 bg-[#D62A1C] cursor-pointer rounded-md text-white font-semibold'>Submit Resume</div>

      </div>

    </div>
  )
}

export default Carrier