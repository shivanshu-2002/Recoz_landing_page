import React, { useState, useEffect } from 'react'
import recoz_logo from '../../assets/Recoz_Logo.png'
import { Link } from "react-router-dom";


const Navbar = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [open , setOpen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
      
     const handleClick = ()=>{
           console.log("Humburger Menu")
           setOpen((prev) => !prev);
     }
    return (
        <>
        <div className='relative bg-[#2A2A2A] p-2 text-white flex items-center justify-center'>
            <nav className=' w-[90%]  flex items-center justify-between'>
                <div className='sm:w-[200px] w-[100px] '>
                    <img src={recoz_logo} className='w-[80%] sm:w-[50%]' />
                </div>
                {/* The Menu type Section Hidden On SMaller Screens */}
                {windowWidth >= 640 ? (
                    <div className='inline-flex items-start gap-9 text-sm'>
                        <Link to="/" className='cursor-pointer' >Home</Link>
                        <Link to="/aboutus" className='cursor-pointer '>About Us</Link>
                        <Link>Services</Link>
                        <Link>Course</Link>
                        <Link>Contact</Link>
                    </div>
                ) : null}

                <div className=' flex  flex-row justify-between items-center gap-6'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-[14px]  h-[14px] sm:w-[23px] sm:h-[23px]' viewBox="0 0 14 14" fill="none">
                            <path d="M11.6135 9.96974C11.3207 9.67684 10.8458 9.67684 10.5529 9.96973C10.26 10.2626 10.26 10.7375 10.5529 11.0304L11.6135 9.96974ZM12.8861 13.3637C13.179 13.6566 13.6539 13.6566 13.9468 13.3637C14.2397 13.0708 14.2397 12.5959 13.9468 12.303L12.8861 13.3637ZM10.5529 11.0304L12.8861 13.3637L13.9468 12.303L11.6135 9.96974L10.5529 11.0304ZM6.4165 10.3333C3.93122 10.3333 1.9165 8.31863 1.9165 5.83334H0.416504C0.416504 9.14705 3.1028 11.8333 6.4165 11.8333V10.3333ZM10.9165 5.83334C10.9165 8.31863 8.90178 10.3333 6.4165 10.3333V11.8333C9.73021 11.8333 12.4165 9.14705 12.4165 5.83334H10.9165ZM6.4165 1.33334C8.90178 1.33334 10.9165 3.34806 10.9165 5.83334H12.4165C12.4165 2.51964 9.73021 -0.166656 6.4165 -0.166656V1.33334ZM6.4165 -0.166656C3.1028 -0.166656 0.416504 2.51964 0.416504 5.83334H1.9165C1.9165 3.34806 3.93122 1.33334 6.4165 1.33334V-0.166656Z" fill="white" />
                        </svg>
                    </div>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-[14px]  h-[14px] sm:w-[24px] sm:h-[24px]' viewBox="0 0 14 14" fill="none">
                            <path d="M10.6803 7.35987L10.7657 7.04113C10.7785 6.99343 10.7849 6.96958 10.79 6.94934C11.1766 5.41912 10.2759 3.85897 8.75734 3.42868C8.73725 3.42299 8.7134 3.4166 8.6657 3.40382L8.34696 3.31842M12.5657 8.29208L12.7151 7.73428C12.8426 7.25837 12.9064 7.02041 12.9422 6.81501C13.3297 4.59096 12.0696 2.40842 9.94977 1.63199C9.754 1.56028 9.51603 1.49652 9.04012 1.369L8.48233 1.21954M5.63239 10.3825L6.37496 10.5067C8.18085 10.8087 9.08379 10.9597 9.51045 10.514C9.59514 10.4256 9.66537 10.3243 9.71856 10.214C9.98656 9.65828 9.52882 8.86544 8.61333 7.27978L7.38284 5.1485C6.46736 3.56284 6.00961 2.77001 5.39432 2.72422C5.27219 2.71513 5.1494 2.72533 5.03044 2.75444C4.43113 2.90109 4.11044 3.75857 3.46906 5.47352L3.20532 6.17871C3.15397 6.31601 3.1283 6.38466 3.10008 6.45016C2.87087 6.9822 2.48842 7.43393 2.00148 7.74776C1.94153 7.7864 1.87805 7.82304 1.75111 7.89634C1.61797 7.9732 1.5514 8.01163 1.49902 8.05023C1.06028 8.37352 0.903807 8.95748 1.12213 9.45682C1.14819 9.51644 1.18662 9.58301 1.26349 9.71615L1.59796 10.2955C1.67483 10.4286 1.71326 10.4952 1.75186 10.5476C2.07515 10.9863 2.65911 11.1428 3.15845 10.9245C3.21807 10.8984 3.28464 10.86 3.41777 10.7831C3.54472 10.7098 3.60819 10.6731 3.67163 10.6405C4.18689 10.3758 4.76932 10.2704 5.34468 10.3379C5.41552 10.3462 5.48781 10.3583 5.63239 10.3825Z" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                    </div>

                    <div onClick={handleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" className='sm:hidden w-[14px] h-[9px]' viewBox="0 0 14 9" fill="none">
                            <line y1="0.5" x2="14" y2="0.5" stroke="white" />
                            <line y1="8.5" x2="14" y2="8.5" stroke="white" />
                        </svg>
                    </div>
                    {windowWidth >= 640 ? (
                        <div className='bg-[#007AFF] px-[10px] py-[8px] rounded-[12px] text-sm'>
                            Login/Signup
                        </div>
                    ) : null}
                </div>
              

            </nav>
        </div>
       
        {windowWidth <= 640 && open ? (
            <div className='absolute top-[90px] right-0 z-[20] flex flex-col gap-2 bg-black text-white p-2 w-[30%] rounded-lg text-lg' onClick={handleClick}>
                        <Link to="/" className='cursor-pointer' >Home</Link>
                        <Link to="/aboutus" className='cursor-pointer '>About Us</Link>
                        <Link>Services</Link>
                        <Link>Course</Link>
                        <Link>Contact</Link>
                    </div>
                ) : null}
        </>
    )
}

export default Navbar