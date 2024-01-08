import React from 'react'
import ContactUsForm from './ContactUsForm'
import img1 from '../../../assets/founder1.jpg';
import img2 from '../../../assets/founder2.png';
import img3 from '../../../assets/founder3.png';

const TeamAndGetInTouch = () => {
  return (
    <>
      <div className=' w-[95%] mx-auto  flex flex-col gap-4' data-aos="zoom-in-up">
        <div className='w-[90%] flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0'>
          <div className='flex w-[93%]  flex-col gap-2 sm:gap-0'>
            <div className='sm:text-[40px] text-[26px] leading-7 sm:leading-9 font-[700] text-black '>Meet our team now</div>
            <div className='text-[19px] sm:text-[20px] font-[500] text-[#6E6E73] leading-7 sm:leading-9 '>Discover Skilled Experts Ready to Assist you! </div>
          </div>
          <div className='bg-[#007AFF] text-white p-2 w-[265px] text-center rounded-md'>Explore More</div>
        </div>
        <div className='w-[100%] mx-auto flex flex-col sm:flex-row gap-3 items-center justify-between'>
          <div className='sm:w-1/3 w-[100%]  h-[350px] flex items-end bg-cover bg-center' style={{ backgroundImage: `url(${img1})` }}>
            <div className='text-white p-5 flex hover:bg-gray-800 hover:opacity-90 transition-[2s] flex-col items-start '>
              <div className='text-[30px] font-[500]'>Sarah Williams</div>
              <div className='text-[24px] font-[400]'>UX Designer</div>
            </div>
          </div>
          <div className='sm:w-1/3  w-[100%] h-[350px] flex items-end  bg-cover bg-center' style={{ backgroundImage: `url(${img2})` }}>
            <div className='text-white p-5 flex flex-col hover:bg-gray-800 transition-[2s] hover:opacity-90 items-start '>
              <div className='text-[30px] font-[500]'>John Doe</div>
              <div className='text-[24px] font-[400]'>Front End Developer</div>
            </div>
          </div>
          <div className='sm:w-1/3 w-[100%] h-[350px] flex items-end bg-cover bg-center' style={{ backgroundImage: `url(${img3})` }}>
            <div className='text-white hover:bg-gray-800 hover:opacity-90 transition-[2s] p-5 flex flex-col items-start '>
              <div className='text-[30px] font-[500]'>Rupesh Martin</div>
              <div className='text-[24px] font-[400]'>Full Stack Engineer</div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[100%] ' data-aos="zoom-in-up">
        <div className='   flex flex-col gap-5 py-3'>
          {/* heading */}
          <div>
            <div className='sm:text-[35px] text-[28px] text-center font-[700]'>Get in Touch</div>
            <div className='text-[18px] text-gray-500 font-[500] text-center w-[90%] sm:w-[50%] mx-auto'>Our success in creating business solutions is due in large part spacially to talented and highly committed team.</div>
          </div>

          <div className='w-[95%] sm:w-[80%] mx-auto gap-3 flex flex-col-reverse sm:flex-row'>
            <div className='sm:w-[50%] w-[100%] p-2 flex items-center justify-start '>
              <div className='sm:w-[80%] w-[100%] flex flex-col gap-10 justify-center'>
                <div className='w-full flex gap-3 items-center justify-start'>
                  <div className='bg-[#007AFF] p-3 rounded-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                      <path d="M6.25 0.298828C5.2933 0.424443 4.36113 0.791459 3.55 1.39981L1.35 3.04981C0.657534 3.56915 0.25 4.38422 0.25 5.24981V13.8788C0.25 16.0918 2.77641 17.355 4.54677 16.0272C5.06228 15.6406 5.64605 15.3911 6.25 15.2787V0.298828Z" fill="white" />
                      <path d="M7.75 15.2787C8.35395 15.3911 8.93772 15.6406 9.45323 16.0272L9.55 16.0998C10.3611 16.7081 11.2933 17.0752 12.25 17.2008V2.22096C11.6461 2.10852 11.0623 1.85902 10.5468 1.47239L10.45 1.39981C9.63887 0.791459 8.7067 0.424443 7.75 0.298828V15.2787Z" fill="white" />
                      <path d="M13.75 2.22096V17.2008C14.7067 17.0752 15.6389 16.7082 16.45 16.0998L18.65 14.4498C19.3425 13.9305 19.75 13.1154 19.75 12.2498V3.62077C19.75 1.40781 17.2236 0.14461 15.4532 1.47239C14.9377 1.85902 14.3539 2.10852 13.75 2.22096Z" fill="white" />
                    </svg>
                  </div>
                  <div>
                    2-98/1, Near L Gannavaram, P Gannavaram, East Godavari, 533240
                  </div>
                </div>
                <div className='flex w-full gap-3 items-center justify-start'>
                  <div className='bg-[#007AFF] p-3 rounded-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                      <path d="M0.333223 3.40947C0 4.64946 0 6.36008 0 9C0 12.7497 0 14.6246 0.954915 15.9389C1.26331 16.3634 1.6366 16.7367 2.06107 17.0451C3.3754 18 5.25027 18 9 18H11C14.7497 18 16.6246 18 17.9389 17.0451C18.3634 16.7367 18.7367 16.3634 19.0451 15.9389C20 14.6246 20 12.7497 20 9C20 6.35129 20 4.63806 19.6634 3.39709L17.5607 5.49986C15.9284 7.13214 14.6492 8.41132 13.517 9.2752C12.3581 10.1594 11.2653 10.6789 9.99986 10.6789C8.73441 10.6789 7.64167 10.1594 6.48274 9.2752C5.35048 8.41132 4.07131 7.13213 2.43904 5.49984L0.483855 3.54466L0.333223 3.40947Z" fill="white" />
                      <path d="M1 2L1.10885 2.09007L1.51587 2.45535L3.45913 4.39861C5.14079 6.08027 6.34981 7.28703 7.39261 8.08267C8.41812 8.8651 9.19425 9.17894 9.99986 9.17894C10.8055 9.17894 11.5816 8.8651 12.6071 8.08267C13.6499 7.28703 14.8589 6.08027 16.5406 4.39861L18.8485 2.0907L18.9741 1.96579C18.6657 1.54132 18.3634 1.26331 17.9389 0.954915C16.6246 0 14.7497 0 11 0H9C5.25027 0 3.3754 0 2.06107 0.954915C1.6366 1.26331 1.3084 1.57553 1 2Z" fill="white" />
                    </svg>
                  </div>
                  <div>
                    info@ricoz.in
                  </div>
                </div>
                <div className='flex w-full gap-3 items-center justify-start'>
                  <div className='bg-[#007AFF] p-3 rounded-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M11.9901 1.75C12.8509 1.75 13.2319 1.75076 13.5461 1.77889C17.0394 2.09165 19.808 4.86017 20.1207 8.35348C20.1489 8.66768 20.1496 9.04868 20.1496 9.90955V10.8995C20.1496 11.3137 20.4854 11.6495 20.8996 11.6495C21.3138 11.6495 21.6496 11.3137 21.6496 10.8995V9.85911C21.6496 9.06221 21.6496 8.60934 21.6147 8.21971C21.2373 4.00365 17.896 0.662337 13.6799 0.284863C13.2902 0.249977 12.8374 0.249985 12.0404 0.250001H11.0001C10.5859 0.250001 10.2501 0.585789 10.2501 1C10.2501 1.41422 10.5859 1.75 11.0001 1.75L11.9901 1.75Z" fill="white" />
                      <path d="M6.11183 3.0253C5.05974 2.05857 3.44259 2.05857 2.3905 3.0253C2.34742 3.06489 2.30142 3.11089 2.2417 3.17063L1.34419 4.06813C0.441081 4.97125 0.0619618 6.27317 0.339024 7.51995C1.91099 14.5938 7.43553 20.1183 14.5094 21.6903C15.7562 21.9674 17.0581 21.5883 17.9612 20.6851L18.8586 19.7877C18.9184 19.728 18.9644 19.6819 19.004 19.6388C19.9708 18.5867 19.9708 16.9696 19.004 15.9175C18.9644 15.8744 18.9184 15.8284 18.8586 15.7686L17.3894 14.2993C16.3693 13.2792 14.8287 12.9875 13.5063 13.564C12.7492 13.894 11.8672 13.7269 11.2832 13.1429L8.88639 10.7461C8.30239 10.1621 8.13536 9.28019 8.46538 8.52308C9.04184 7.20062 8.75009 5.66009 7.72999 4.63999L6.26066 3.17065C6.20092 3.1109 6.15492 3.06489 6.11183 3.0253Z" fill="white" />
                      <path d="M11.7071 3.78554C11.2929 3.78554 10.9571 4.12132 10.9571 4.53553C10.9571 4.94975 11.2929 5.28553 11.7071 5.28553H12.2728C12.36 5.28553 12.3957 5.28555 12.4248 5.28597C14.7244 5.3189 16.5806 7.1751 16.6135 9.47467C16.6139 9.50375 16.614 9.53946 16.614 9.6267V10.1924C16.614 10.6066 16.9497 10.9424 17.364 10.9424C17.7782 10.9424 18.114 10.6066 18.114 10.1924V9.61944C18.114 9.54173 18.114 9.49444 18.1134 9.45319C18.0688 6.342 15.5575 3.83068 12.4463 3.78612C12.405 3.78553 12.3577 3.78553 12.28 3.78554H11.7071Z" fill="white" />
                    </svg>
                  </div>
                  <div>
                    +91 9908399959
                  </div>
                </div>
              </div>
            </div>
            <div className='sm:w-[50%] w-[100%] p-2' >
              <ContactUsForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamAndGetInTouch