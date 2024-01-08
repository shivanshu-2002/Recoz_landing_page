import React, { useEffect, useState } from 'react';
import img2 from '../../../assets/73f820fb2cca49e965b6471e87b6d78a.jpg'

const WorkFlow = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className='w-[100%] bg-[#2A2A2A] py-5 flex flex-col gap-3' data-aos="fade-up">
      {/* Heading */}
      <div className='relative w-[90%] sm:w-[80%]  mx-auto   flex flex-col gap-3'>
        <div className=' text-white  mt-3 text-center text-[28px] sm:text-[40px] w-[90%] mx-auto leading-7 font-[700] mb-5'>Enhance your workflow with Integrated tools</div>
        {/* workFlow */}
        <div className='flex flex-col justify-center p-2  gap-4 sm:gap-[170px]'>

          <div className='flex flex-col sm:flex-row  gap-4 justify-between items-center  '>

            <div className='w-[310px] h-[150px] rounded-xl flex flex-col gap-[1px] bg-[#D9D9D9] p-4' data-aos={windowWidth >= 635 ? "fade-right" : "fade-up"}
            >
              <div className='flex items-center justify-between '>
                <div className='flex justify-start gap-3 w-[100%] '>
                  <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.09562 18.8906C10.0054 21.3067 14.8228 19.3427 17.0944 17.0711C20.9997 13.1658 20.9997 6.83418 17.0944 2.92893C13.1892 -0.976311 6.85752 -0.976311 2.95228 2.92893C0.58389 5.29732 -1.29244 10.0269 1.13203 13.9282C1.26629 14.1442 1.33344 14.2523 1.36627 14.3347C1.42886 14.4919 1.44725 14.6126 1.43431 14.7812C1.42752 14.8697 1.40161 14.9697 1.34979 15.1696C1.02378 16.4274 0.860777 17.0563 0.952984 17.5094C1.11302 18.2958 1.72759 18.9103 2.51396 19.0704C2.96704 19.1626 3.59593 18.9996 4.85373 18.6736C5.05359 18.6218 5.15357 18.5958 5.24178 18.589C5.41043 18.576 5.52971 18.594 5.68699 18.6563C5.76925 18.6889 5.87804 18.7561 6.09562 18.8906ZM7.05273 9.85779C7.05273 10.4101 6.60502 10.8578 6.05273 10.8578C5.50045 10.8578 5.05273 10.4101 5.05273 9.85779C5.05273 9.3055 5.50045 8.85779 6.05273 8.85779C6.60502 8.85779 7.05273 9.3055 7.05273 9.85779ZM11.0527 9.85779C11.0527 10.4101 10.605 10.8578 10.0527 10.8578C9.50045 10.8578 9.05273 10.4101 9.05273 9.85779C9.05273 9.3055 9.50045 8.85779 10.0527 8.85779C10.605 8.85779 11.0527 9.3055 11.0527 9.85779ZM14.0527 10.8578C14.605 10.8578 15.0527 10.4101 15.0527 9.85779C15.0527 9.3055 14.605 8.85779 14.0527 8.85779C13.5005 8.85779 13.0527 9.3055 13.0527 9.85779C13.0527 10.4101 13.5005 10.8578 14.0527 10.8578Z" fill="#2A2A2A" />
                    </svg></div>
                  <div className='mt-2 text-center font-semibold text-[19px]'>Messaging Platform</div>
                </div>
              </div>
              <div className='text-sm text-gray-700 leading-5'>
                Lorem ipsum dolor sit amet consectetur. Id habitant mattis ipsum congue in ornare ullamcorper magna. Nibh malesuada tincidunt.
              </div>
            </div>

            <div className='w-[310px] h-[150px] rounded-xl flex flex-col gap-[1px] bg-[#D9D9D9] p-4'  data-aos={windowWidth >= 635 ? "fade-right" : "fade-up"}>
              <div className='flex items-center justify-between '>
                <div className='flex justify-start gap-3 w-[100%] '>
                  <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
                      <path d="M8.65063 7.36812C7.78554 6.50781 7.25 5.31645 7.25 4C7.25 2.68355 7.78554 1.49219 8.65063 0.631879C8.15256 0.387327 7.59232 0.25 7 0.25C4.92893 0.25 3.25 1.92893 3.25 4C3.25 6.07107 4.92893 7.75 7 7.75C7.59232 7.75 8.15256 7.61267 8.65063 7.36812Z" fill="#2A2A2A" />
                      <path d="M8.25 4C8.25 1.92893 9.92893 0.25 12 0.25C14.0711 0.25 15.75 1.92893 15.75 4C15.75 6.07107 14.0711 7.75 12 7.75C9.92893 7.75 8.25 6.07107 8.25 4Z" fill="#2A2A2A" />
                      <path d="M15.3494 0.631879C16.2145 1.49219 16.75 2.68355 16.75 4C16.75 5.31645 16.2145 6.50781 15.3494 7.36812C15.8474 7.61267 16.4077 7.75 17 7.75C19.0711 7.75 20.75 6.07107 20.75 4C20.75 1.92893 19.0711 0.25 17 0.25C16.4077 0.25 15.8474 0.387327 15.3494 0.631879Z" fill="#2A2A2A" />
                      <path d="M5.25 13C5.25 10.9289 6.92893 9.25 9 9.25H15C17.0711 9.25 18.75 10.9289 18.75 13C18.75 15.0711 17.0711 16.75 15 16.75H9C6.92893 16.75 5.25 15.0711 5.25 13Z" fill="#2A2A2A" />
                      <path d="M0.25 12C0.25 9.92893 1.92893 8.25 4 8.25H9C6.37665 8.25 4.25 10.3766 4.25 13C4.25 14.0249 4.57458 14.9739 5.12655 15.75H4C1.92893 15.75 0.25 14.0711 0.25 12Z" fill="#2A2A2A" />
                      <path d="M19.75 13C19.75 14.0249 19.4254 14.9739 18.8734 15.75H20C22.0711 15.75 23.75 14.0711 23.75 12C23.75 9.92893 22.0711 8.25 20 8.25H15C17.6234 8.25 19.75 10.3766 19.75 13Z" fill="#2A2A2A" />
                    </svg></div>
                  <div className='mt-2 text-center font-semibold text-[19px]'>Collaborative Workspace</div>
                </div>
              </div>
              <div className='text-sm text-gray-700 leading-5'>
                Lorem ipsum dolor sit amet consectetur. Id habitant mattis ipsum congue in ornare ullamcorper magna. Nibh malesuada tincidunt.
              </div>
            </div>

          </div>
          <div className='flex flex-col sm:flex-row justify-between gap-4  items-center  '>

            <div className='w-[310px] h-[150px] rounded-xl flex flex-col gap-[1px] bg-[#D9D9D9] p-4'  data-aos={windowWidth >= 635 ? "fade-left" : "fade-up"}>
              <div className='flex items-center justify-between '>
                <div className='flex justify-start gap-3 w-[100%] '>
                  <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0453 0.25C11.8818 0.249992 13.3214 0.249986 14.4635 0.373728C15.6291 0.500006 16.5734 0.762324 17.3798 1.34815C17.8679 1.70281 18.2972 2.13209 18.6518 2.62024C19.2377 3.42656 19.5 4.37094 19.6263 5.53648C19.75 6.67859 19.75 8.11824 19.75 9.95473V10.0453C19.75 11.8818 19.75 13.3214 19.6263 14.4635C19.5 15.6291 19.2377 16.5734 18.6518 17.3798C18.2972 17.8679 17.8679 18.2972 17.3798 18.6518C16.5734 19.2377 15.6291 19.5 14.4635 19.6263C13.3214 19.75 11.8818 19.75 10.0453 19.75H9.95465C8.11817 19.75 6.67859 19.75 5.53648 19.6263C4.37094 19.5 3.42656 19.2377 2.62024 18.6518C2.13209 18.2972 1.70281 17.8679 1.34815 17.3798C0.762324 16.5734 0.500006 15.6291 0.373728 14.4635C0.249986 13.3214 0.249992 11.8818 0.25 10.0453V9.95475C0.249992 8.11822 0.249986 6.67861 0.373728 5.53648C0.500006 4.37094 0.762324 3.42656 1.34815 2.62024C1.70281 2.13209 2.13209 1.70281 2.62024 1.34815C3.42656 0.762324 4.37094 0.500006 5.53648 0.373728C6.67861 0.249986 8.11821 0.249992 9.95474 0.25H10.0453ZM10.75 5C10.75 4.58579 10.4142 4.25 10 4.25C9.58579 4.25 9.25 4.58579 9.25 5V15C9.25 15.4142 9.58579 15.75 10 15.75C10.4142 15.75 10.75 15.4142 10.75 15V5ZM14.75 9C14.75 8.58579 14.4142 8.25 14 8.25C13.5858 8.25 13.25 8.58579 13.25 9V15C13.25 15.4142 13.5858 15.75 14 15.75C14.4142 15.75 14.75 15.4142 14.75 15V9ZM6.75 11C6.75 10.5858 6.41421 10.25 6 10.25C5.58579 10.25 5.25 10.5858 5.25 11V15C5.25 15.4142 5.58579 15.75 6 15.75C6.41421 15.75 6.75 15.4142 6.75 15V11Z" fill="#2A2A2A" />
                    </svg></div>
                  <div className='mt-2 text-center font-semibold text-[19px]'>CRM System</div>
                </div>
              </div>
              <div className='text-sm text-gray-700 leading-5'>
                Lorem ipsum dolor sit amet consectetur. Id habitant mattis ipsum congue in ornare ullamcorper magna. Nibh malesuada tincidunt.
              </div>
            </div>
            <div className='w-[310px] h-[150px] rounded-xl flex flex-col gap-[1px] bg-[#D9D9D9] p-4'  data-aos={windowWidth >= 635 ? "fade-left" : "fade-up"}>
              <div className='flex items-center justify-between '>
                <div className='flex justify-start gap-3 w-[100%] '>
                  <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 3.13266C3.45858 3.25614 2.69469 3.49457 2.06107 3.95492C1.6366 4.26331 1.26331 4.6366 0.954915 5.06107C0 6.3754 0 8.25027 0 12C0 15.7497 0 17.6246 0.954915 18.9389C1.26331 19.3634 1.6366 19.7367 2.06107 20.0451C3.3754 21 5.25027 21 9 21C9.83894 21 10.584 21 11.25 20.9893L11.25 20.9192C11.2499 20.0672 11.2499 19.5482 11.3208 19.1005C11.7105 16.6401 13.6401 14.7105 16.1005 14.3208C16.5482 14.2499 17.0672 14.2499 17.9192 14.25L17.9893 14.25C18 13.5842 18 12.8392 18 12.0005C18 8.25073 18 6.3754 17.0451 5.06107C16.7367 4.6366 16.3634 4.26331 15.9389 3.95492C15.3053 3.49457 14.5414 3.25614 13.5 3.13266V4C13.5 4.82843 12.8284 5.5 12 5.5C11.1716 5.5 10.5 4.82843 10.5 4V3.00281C10.0359 3 9.53719 3 9 3C8.46281 3 7.9641 3 7.5 3.00281V4C7.5 4.82843 6.82843 5.5 6 5.5C5.17157 5.5 4.5 4.82843 4.5 4V3.13266ZM4 9C4.55228 9 5 8.55228 5 8C5 7.44772 4.55228 7 4 7C3.44772 7 3 7.44772 3 8C3 8.55228 3.44772 9 4 9ZM5 12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11C4.55228 11 5 11.4477 5 12ZM9 9C9.55229 9 10 8.55228 10 8C10 7.44772 9.55229 7 9 7C8.44771 7 8 7.44772 8 8C8 8.55228 8.44771 9 9 9ZM10 12C10 12.5523 9.55229 13 9 13C8.44771 13 8 12.5523 8 12C8 11.4477 8.44771 11 9 11C9.55229 11 10 11.4477 10 12ZM9 17C9.55229 17 10 16.5523 10 16C10 15.4477 9.55229 15 9 15C8.44771 15 8 15.4477 8 16C8 16.5523 8.44771 17 9 17ZM15 8C15 8.55228 14.5523 9 14 9C13.4477 9 13 8.55228 13 8C13 7.44772 13.4477 7 14 7C14.5523 7 15 7.44772 15 8ZM14 13C14.5523 13 15 12.5523 15 12C15 11.4477 14.5523 11 14 11C13.4477 11 13 11.4477 13 12C13 12.5523 13.4477 13 14 13ZM5 16C5 16.5523 4.55228 17 4 17C3.44772 17 3 16.5523 3 16C3 15.4477 3.44772 15 4 15C4.55228 15 5 15.4477 5 16Z" fill="#2A2A2A" />
                      <path d="M17.9347 15.75C17.0243 15.7501 16.6435 15.7535 16.3352 15.8023C14.5166 16.0904 13.0904 17.5166 12.8023 19.3352C12.7535 19.6435 12.7501 20.0243 12.75 20.9347C14.1896 20.8403 15.1622 20.6094 15.9389 20.0451C16.3634 19.7367 16.7367 19.3634 17.0451 18.9389C17.6094 18.1622 17.8403 17.1896 17.9347 15.75Z" fill="#2A2A2A" />
                      <path d="M6.75 1C6.75 0.585786 6.41421 0.25 6 0.25C5.58579 0.25 5.25 0.585786 5.25 1V4C5.25 4.41421 5.58579 4.75 6 4.75C6.41421 4.75 6.75 4.41421 6.75 4V1Z" fill="#2A2A2A" />
                      <path d="M12.75 1C12.75 0.585786 12.4142 0.25 12 0.25C11.5858 0.25 11.25 0.585786 11.25 1V4C11.25 4.41421 11.5858 4.75 12 4.75C12.4142 4.75 12.75 4.41421 12.75 4V1Z" fill="#2A2A2A" />
                    </svg></div>
                  <div className='mt-2 text-center font-semibold text-[19px]'>Calender Integration</div>
                </div>
              </div>
              <div className='text-sm text-gray-700 leading-5'>
                Lorem ipsum dolor sit amet consectetur. Id habitant mattis ipsum congue in ornare ullamcorper magna. Nibh malesuada tincidunt.
              </div>
            </div>

          </div>

        </div>
        {/* Center */}
        {
          windowWidth >= 700 ? 
          <div className='absolute w-[200px] h-[200px]    border-[3px] border-slate-400 top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center'>
            <div className='w-[180px] h-[180px] border-[3px] border-slate-400 rounded-full flex items-center justify-center'>
              <div className='w-[160px] overflow-hidden h-[160px]  rounded-full'>
                <img src={img2} />
              </div>
            </div>
              {/* The squares in the middle for design */}
            <div className='absolute bottom-[-30%] right-[-30px] w-[115px] h-[55px] border-dashed border-2 border-r-0 border-t-0'></div>
            <div className='absolute top-[-30%] right-[-30px] w-[115px] h-[55px] border-dashed border-2 border-r-0 border-b-0'></div>
            <div className='absolute bottom-[-30%] left-[-30px] w-[115px] h-[55px] border-dashed border-2 border-l-0 border-t-0'></div>
            <div className='absolute top-[-30%] left-[-30px] w-[115px] h-[55px] border-dashed border-2 border-l-0 border-b-0'></div>
            </div> 
             : ''
        }

      </div>
    </div>
  );
};

export default WorkFlow;
