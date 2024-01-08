import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Home/Card";
import CourseCard from "./Home/CourseCard";
import ReviewCard from "./Home/ReviewCard";
import EmployeeTestimonial from "./about/EmployeeTestimonial";


const ExplorePlatformCarousel = ({ items, cardType }) => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [slidePercentage, setSlidePercentage] = useState(0);

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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: windowWidth >= 635 ? 3 : 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      const totalSlides = items.length;
      const percentage = ((next + 1) / totalSlides) * 100; // Add 1 to make it 1-indexed
      setSlidePercentage(percentage);
    },
  };

  const sliderRef = useRef(null);

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <div className="w-[100%]  sm:w-[95%] mx-auto p-2 py-5">
        <Slider ref={sliderRef} {...sliderSettings}>
          {items.map((item, index) => (
             cardType === 'Course' ? (
              <CourseCard key={index} item={item} />
            ) : cardType === 'Review' ? (
              <ReviewCard key={index} item={item} />
            ) : cardType==='EmployeeTesti'?(
              <EmployeeTestimonial key={index} item={item}/>
            ):
            (
              <Card key={index} item={item} />
            )
          ))}
        </Slider>
      </div>
      <div className="w-[100%] h-[10vh] mt-3 sm:mt-10">
        <div className="flex justify-center gap-3 items-center p-2">
          <div onClick={prevSlide} className="text-white cursor-pointer  h-[48px] w-[48px] flex items-center justify-center rounded-full bg-[#F5F5F7]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
              <path d="M17 6.75C17.4142 6.75 17.75 6.41421 17.75 6C17.75 5.58579 17.4142 5.25 17 5.25V6.75ZM1 5.25C0.585787 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585787 6.75 1 6.75V5.25ZM4.47204 11.5327C4.76624 11.8243 5.24111 11.8222 5.53269 11.528C5.82427 11.2338 5.82216 10.7589 5.52796 10.4673L4.47204 11.5327ZM3.23703 9.25269L3.76499 8.72H3.76499L3.23703 9.25269ZM3.23703 2.74731L2.70907 2.21462H2.70907L3.23703 2.74731ZM5.52796 1.53269C5.82216 1.24111 5.82428 0.766238 5.53269 0.472041C5.24111 0.177844 4.76624 0.175726 4.47204 0.467309L5.52796 1.53269ZM1.01989 6.31333L0.275909 6.40816L0.275909 6.40816L1.01989 6.31333ZM1.01989 5.68667L0.275909 5.59184L0.275909 5.59184L1.01989 5.68667ZM17 5.25H1V6.75H17V5.25ZM5.52796 10.4673L3.76499 8.72L2.70907 9.78538L4.47204 11.5327L5.52796 10.4673ZM3.76499 3.28L5.52796 1.53269L4.47204 0.467309L2.70907 2.21462L3.76499 3.28ZM3.76499 8.72C3.0495 8.01086 2.55869 7.52282 2.22659 7.10929C1.904 6.7076 1.79332 6.44958 1.76387 6.2185L0.275909 6.40816C0.354695 7.02628 0.649627 7.54122 1.05706 8.04854C1.45498 8.54403 2.01863 9.10108 2.70907 9.78538L3.76499 8.72ZM2.70907 2.21462C2.01863 2.89892 1.45498 3.45597 1.05706 3.95146C0.649628 4.45878 0.354695 4.97372 0.275909 5.59184L1.76387 5.7815C1.79332 5.55042 1.904 5.2924 2.22659 4.89071C2.55869 4.47718 3.0495 3.98914 3.76499 3.28L2.70907 2.21462ZM1.76387 6.2185C1.74538 6.07341 1.74538 5.92659 1.76387 5.7815L0.275909 5.59184C0.241364 5.86286 0.241364 6.13714 0.275909 6.40816L1.76387 6.2185Z" fill="#2A2A2A" />
            </svg>
          </div>
          <div className="w-[228px] h-[14px] rounded-[12px]  border-black bg-[#F5F5F7]">
            <div className="bg-blue-500 h-[14px] rounded-[12px] transition-[2s]" style={{ width: `${slidePercentage}%` }}></div>
          </div>
          <div onClick={nextSlide} className="text-white cursor-pointer  h-[48px] w-[48px] flex items-center justify-center rounded-full bg-[#F5F5F7]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
              <path d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41422 0.585786 6.75 1 6.75L1 5.25ZM17 6.75C17.4142 6.75 17.75 6.41421 17.75 6C17.75 5.58579 17.4142 5.25 17 5.25V6.75ZM13.528 0.467309C13.2338 0.175726 12.7589 0.177844 12.4673 0.472041C12.1757 0.766238 12.1778 1.24111 12.472 1.53269L13.528 0.467309ZM14.763 2.74731L14.235 3.28L14.763 2.74731ZM14.763 9.25269L15.2909 9.78538L14.763 9.25269ZM12.472 10.4673C12.1778 10.7589 12.1757 11.2338 12.4673 11.528C12.7589 11.8222 13.2338 11.8243 13.528 11.5327L12.472 10.4673ZM16.9801 5.68667L17.7241 5.59184V5.59184L16.9801 5.68667ZM16.9801 6.31333L17.7241 6.40816V6.40816L16.9801 6.31333ZM1 6.75L17 6.75V5.25L1 5.25L1 6.75ZM12.472 1.53269L14.235 3.28L15.2909 2.21462L13.528 0.467309L12.472 1.53269ZM14.235 8.72L12.472 10.4673L13.528 11.5327L15.2909 9.78538L14.235 8.72ZM14.235 3.28C14.9505 3.98914 15.4413 4.47718 15.7734 4.8907C16.096 5.2924 16.2067 5.55042 16.2361 5.7815L17.7241 5.59184C17.6453 4.97372 17.3504 4.45878 16.9429 3.95146C16.545 3.45597 15.9814 2.89892 15.2909 2.21462L14.235 3.28ZM15.2909 9.78538C15.9814 9.10108 16.545 8.54403 16.9429 8.04854C17.3504 7.54121 17.6453 7.02628 17.7241 6.40816L16.2361 6.2185C16.2067 6.44958 16.096 6.7076 15.7734 7.10929C15.4413 7.52282 14.9505 8.01086 14.235 8.72L15.2909 9.78538ZM16.2361 5.7815C16.2546 5.92659 16.2546 6.07341 16.2361 6.2185L17.7241 6.40816C17.7586 6.13714 17.7586 5.86286 17.7241 5.59184L16.2361 5.7815Z" fill="#2A2A2A" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExplorePlatformCarousel;


