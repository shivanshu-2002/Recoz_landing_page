import React from 'react'
import img from '../../../assets/aboutUs/INVESTOR.png'

const Investor = () => {
  return (
    <div className='text-black flex flex-col gap-10 w-[80%] mx-auto'>
          <div className='text-[40px] font-[600]  w-[85%] mx-auto'>
          <div className='sm:text-[48px] text-4xl text-center sm:text-start font-[500] font-SFPRODISPLAYREGULAR sm:my-3 border-b-2 sm:inline-block text-purple-900 border-black  py-2'>Our Investor</div>
</div>
          <div className='sm:w-[80%] w-[100%] mx-auto'>
            <img src={img} alt='investors'/>
          </div>
          <div className='sm:w-[75%] w-[100%] mx-auto text-[20px] font-[400]' data-aos="fade-up">Revlon, Inc. is a leading global beauty company with a portfolio of iconic brands that transform the lives of women and men around the world. Our Company manufactures and markets color cosmetics, hair color and care, skincare, beauty care and fragrances through a diverse portfolio of 15+ brands sold in more than 150 countries.</div>
          <div className='sm:w-[75%] w-[100%] mx-auto text-lg'>Read more..</div>
    </div>
  )
}

export default Investor