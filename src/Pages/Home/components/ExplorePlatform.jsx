import React, { useState } from 'react'
import ExplorePlatform_corousel from '../../../components/Corousel/Corousel'


const ExplorePlatform = () => {
  const [items, setItems] = useState(
    [
      {
        logo:<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
        <path d="M18.5304 17.4698C18.2375 17.1769 17.7626 17.1769 17.4697 17.4698C17.1768 17.7626 17.1768 18.2375 17.4697 18.5304L18.5304 17.4698ZM21.4696 22.5304C21.7625 22.8233 22.2374 22.8233 22.5303 22.5304C22.8232 22.2375 22.8232 21.7626 22.5303 21.4697L21.4696 22.5304ZM8.33512 4.80232C8.74423 4.73752 9.02336 4.35334 8.95856 3.94423C8.89376 3.53511 8.50958 3.25599 8.10047 3.32079L8.33512 4.80232ZM3.32076 8.1005C3.25596 8.50961 3.53508 8.89379 3.9442 8.95859C4.35331 9.02339 4.73749 8.74426 4.80229 8.33515L3.32076 8.1005ZM17.4697 18.5304L21.4696 22.5304L22.5303 21.4697L18.5304 17.4698L17.4697 18.5304ZM10 18.25C5.44365 18.25 1.75 14.5563 1.75 10H0.25C0.25 15.3848 4.61522 19.75 10 19.75V18.25ZM18.25 10C18.25 14.5563 14.5563 18.25 10 18.25V19.75C15.3848 19.75 19.75 15.3848 19.75 10H18.25ZM10 1.75C14.5563 1.75 18.25 5.44365 18.25 10H19.75C19.75 4.61522 15.3848 0.25 10 0.25V1.75ZM10 0.25C4.61522 0.25 0.25 4.61522 0.25 10H1.75C1.75 5.44365 5.44365 1.75 10 1.75V0.25ZM8.10047 3.32079C5.64008 3.71047 3.71044 5.64012 3.32076 8.1005L4.80229 8.33515C5.09032 6.51661 6.51658 5.09035 8.33512 4.80232L8.10047 3.32079Z" fill="#2A2A2A"/>
        </svg>,
        heading: 'Instant Search',
        paragraph: 'Lorem ipsum dolor sit amet consectetur. Donec elementum sit id volutpat arcu pellentesque faucibus eu dictum. Adipiscing nulla mauris facilisis gravida non viverra. Ut blandit nulla neque elementum. Non feugiat quisque lorem id iaculis. Arcu sodales diam ullamcorper mi. Ultricies',
      },
      {
        logo:<svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
        <path d="M8.99999 0C10.8613 0 11.7919 0 12.5451 0.244717C13.8631 0.672979 14.9347 1.6252 15.5195 2.86114C14.8993 2.59476 14.202 2.45008 13.4019 2.3672C12.2703 2.24999 10.8487 2.24999 9.04282 2.25H8.95718C7.15135 2.24999 5.72979 2.24999 4.59818 2.36719C3.79804 2.45006 3.10076 2.59474 2.4805 2.86114C3.0653 1.6252 4.13685 0.672979 5.45491 0.244717C6.20807 0 7.13871 0 8.99999 0Z" fill="#2A2A2A"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.954915 5.06107C0 6.3754 0 8.25027 0 12C0 15.7497 0 17.6246 0.954915 18.9389C1.26331 19.3634 1.6366 19.7367 2.06107 20.0451C3.3754 21 5.25027 21 9 21C12.7497 21 14.6246 21 15.9389 20.0451C16.3634 19.7367 16.7367 19.3634 17.0451 18.9389C18 17.6246 18 15.7497 18 12C18 8.25027 18 6.3754 17.0451 5.06107C16.7367 4.6366 16.3634 4.26331 15.9389 3.95491C15.9159 3.93821 15.8928 3.92181 15.8694 3.90569C14.5584 3 12.6842 3 9 3C5.31596 3 3.44167 3 2.13068 3.9056C2.1073 3.92175 2.0841 3.93818 2.06107 3.95491C1.6366 4.26331 1.26331 4.6366 0.954915 5.06107ZM5 13.25C4.58579 13.25 4.25 13.5858 4.25 14C4.25 14.4142 4.58579 14.75 5 14.75H13C13.4142 14.75 13.75 14.4142 13.75 14C13.75 13.5858 13.4142 13.25 13 13.25H5Z" fill="#2A2A2A"/>
        </svg>,
        heading: 'Quality Scoring',
        paragraph: 'Lorem ipsum dolor sit amet consectetur. Donec elementum sit id volutpat arcu pellentesque faucibus eu dictum. Adipiscing nulla mauris facilisis gravida non viverra. Ut blandit nulla neque elementum. Non feugiat quisque lorem id iaculis. Arcu sodales diam ullamcorper mi. Ultricies',
      },
{
        logo:<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
        <path d="M18.5304 17.4698C18.2375 17.1769 17.7626 17.1769 17.4697 17.4698C17.1768 17.7626 17.1768 18.2375 17.4697 18.5304L18.5304 17.4698ZM21.4696 22.5304C21.7625 22.8233 22.2374 22.8233 22.5303 22.5304C22.8232 22.2375 22.8232 21.7626 22.5303 21.4697L21.4696 22.5304ZM8.33512 4.80232C8.74423 4.73752 9.02336 4.35334 8.95856 3.94423C8.89376 3.53511 8.50958 3.25599 8.10047 3.32079L8.33512 4.80232ZM3.32076 8.1005C3.25596 8.50961 3.53508 8.89379 3.9442 8.95859C4.35331 9.02339 4.73749 8.74426 4.80229 8.33515L3.32076 8.1005ZM17.4697 18.5304L21.4696 22.5304L22.5303 21.4697L18.5304 17.4698L17.4697 18.5304ZM10 18.25C5.44365 18.25 1.75 14.5563 1.75 10H0.25C0.25 15.3848 4.61522 19.75 10 19.75V18.25ZM18.25 10C18.25 14.5563 14.5563 18.25 10 18.25V19.75C15.3848 19.75 19.75 15.3848 19.75 10H18.25ZM10 1.75C14.5563 1.75 18.25 5.44365 18.25 10H19.75C19.75 4.61522 15.3848 0.25 10 0.25V1.75ZM10 0.25C4.61522 0.25 0.25 4.61522 0.25 10H1.75C1.75 5.44365 5.44365 1.75 10 1.75V0.25ZM8.10047 3.32079C5.64008 3.71047 3.71044 5.64012 3.32076 8.1005L4.80229 8.33515C5.09032 6.51661 6.51658 5.09035 8.33512 4.80232L8.10047 3.32079Z" fill="#2A2A2A"/>
        </svg>,
        heading: 'Instant Search',
        paragraph: 'Lorem ipsum dolor sit amet consectetur. Donec elementum sit id volutpat arcu pellentesque faucibus eu dictum. Adipiscing nulla mauris facilisis gravida non viverra. Ut blandit nulla neque elementum. Non feugiat quisque lorem id iaculis. Arcu sodales diam ullamcorper mi. Ultricies',
      },
      {
        logo:<svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
        <path d="M8.99999 0C10.8613 0 11.7919 0 12.5451 0.244717C13.8631 0.672979 14.9347 1.6252 15.5195 2.86114C14.8993 2.59476 14.202 2.45008 13.4019 2.3672C12.2703 2.24999 10.8487 2.24999 9.04282 2.25H8.95718C7.15135 2.24999 5.72979 2.24999 4.59818 2.36719C3.79804 2.45006 3.10076 2.59474 2.4805 2.86114C3.0653 1.6252 4.13685 0.672979 5.45491 0.244717C6.20807 0 7.13871 0 8.99999 0Z" fill="#2A2A2A"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.954915 5.06107C0 6.3754 0 8.25027 0 12C0 15.7497 0 17.6246 0.954915 18.9389C1.26331 19.3634 1.6366 19.7367 2.06107 20.0451C3.3754 21 5.25027 21 9 21C12.7497 21 14.6246 21 15.9389 20.0451C16.3634 19.7367 16.7367 19.3634 17.0451 18.9389C18 17.6246 18 15.7497 18 12C18 8.25027 18 6.3754 17.0451 5.06107C16.7367 4.6366 16.3634 4.26331 15.9389 3.95491C15.9159 3.93821 15.8928 3.92181 15.8694 3.90569C14.5584 3 12.6842 3 9 3C5.31596 3 3.44167 3 2.13068 3.9056C2.1073 3.92175 2.0841 3.93818 2.06107 3.95491C1.6366 4.26331 1.26331 4.6366 0.954915 5.06107ZM5 13.25C4.58579 13.25 4.25 13.5858 4.25 14C4.25 14.4142 4.58579 14.75 5 14.75H13C13.4142 14.75 13.75 14.4142 13.75 14C13.75 13.5858 13.4142 13.25 13 13.25H5Z" fill="#2A2A2A"/>
        </svg>,
        heading: 'Quality Scoring',
        paragraph: 'Lorem ipsum dolor sit amet consectetur. Donec elementum sit id volutpat arcu pellentesque faucibus eu dictum. Adipiscing nulla mauris facilisis gravida non viverra. Ut blandit nulla neque elementum. Non feugiat quisque lorem id iaculis. Arcu sodales diam ullamcorper mi. Ultricies',
      }
    ]
  );
  return (
    <div className='w-[100%] flex items-center justify-center my-5 bg-white ' data-aos="fade-up" data-aos-duration="2000">
            <div className='sm:w-[95%] w-[100%]    flex items-center justify-center flex-col gap-2'>
            {/* hEADING */}
                    <div className='text-[24px] font-[500] text-[#2A2A2A] leading-8  w-[90%] '>Explore our Platform Unique Features </div>
                      {/* COROUSEL PART */}
                    <div className='w-[100%]   py-4 rounded-lg shadow-lg '>
                             <ExplorePlatform_corousel items={items}/>
                    </div>
            </div> 
    </div>
  )
}

export default ExplorePlatform