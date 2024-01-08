import React, { useState } from 'react'
import ExplorePlatform_corousel from '../../../components/Corousel/Corousel'
import img1 from '../../../assets/founder1.jpg';
import img2 from '../../../assets/founder2.png';
import img3 from '../../../assets/founder3.png';


const Reviews = () => {
  const [items, setItems] = useState(
    [
      {
        name: 'John Doe',
        Profession: 'Software Developer',
        rating: 5,
        review: "“I Recommend this to all” ",
        paragraph: 'Lorem ipsum dolor sit amet consectetur. Morbi ut non id sed sed risus amet elit purus. Nam nulla tortor integer neque dui elit. Egestas id vel lectus odio nunc tincidunt. Fermentum ipsum diam maecenas facilisis eleifend tristique. Sed euismod sem elit sit lacus. Viverra enim a sed adipiscing dictum mauris integer nunc.',
        imgLink: img1
      },
      {
        name: 'Olivia Martin',
        Profession: 'Ui/Ux Designer',
        rating: 4.1,
        review: "“ The Support is awesome “ ",
        paragraph: 'Lorem ipsum dolor sit amet consectetur. Morbi ut non id sed sed risus amet elit purus. Nam nulla tortor integer neque dui elit. Egestas id vel lectus odio nunc tincidunt. Fermentum ipsum diam maecenas facilisis eleifend tristique. Sed euismod sem elit sit lacus. Viverra enim a sed adipiscing dictum mauris integer nunc.',
        imgLink: img2
      },
      {
        name: 'Ella Lewis',
        Profession: 'Interaction Analyser',
        rating: 5,
        review: "“ A Game Changer for us “",
        paragraph: 'Lorem ipsum dolor sit amet consectetur. Morbi ut non id sed sed risus amet elit purus. Nam nulla tortor integer neque dui elit. Egestas id vel lectus odio nunc tincidunt. Fermentum ipsum diam maecenas facilisis eleifend tristique. Sed euismod sem elit sit lacus. Viverra enim a sed adipiscing dictum mauris integer nunc.',
        imgLink: img3
      },
      {
        name: 'John Doe',
        Profession: 'Software Developer',
        rating: 5,
        review: "“I Recommend this to all” ",
        paragraph: 'Lorem ipsum dolor sit amet consectetur. Morbi ut non id sed sed risus amet elit purus. Nam nulla tortor integer neque dui elit. Egestas id vel lectus odio nunc tincidunt. Fermentum ipsum diam maecenas facilisis eleifend tristique. Sed euismod sem elit sit lacus. Viverra enim a sed adipiscing dictum mauris integer nunc.',
        imgLink: img1
      },
      {
        name: 'Olivia Martin',
        Profession: 'Ui/Ux Designer',
        rating: 4.1,
        review: "“ The Support is awesome “ ",
        paragraph: 'Lorem ipsum dolor sit amet consectetur. Morbi ut non id sed sed risus amet elit purus. Nam nulla tortor integer neque dui elit. Egestas id vel lectus odio nunc tincidunt. Fermentum ipsum diam maecenas facilisis eleifend tristique. Sed euismod sem elit sit lacus. Viverra enim a sed adipiscing dictum mauris integer nunc.',
        imgLink: img2
      },
      {
        name: 'Ella Lewis',
        Profession: 'Interaction Analyser',
        rating: 5,
        review: "“ A Game Changer for us “",
        paragraph: 'Lorem ipsum dolor sit amet consectetur. Morbi ut non id sed sed risus amet elit purus. Nam nulla tortor integer neque dui elit. Egestas id vel lectus odio nunc tincidunt. Fermentum ipsum diam maecenas facilisis eleifend tristique. Sed euismod sem elit sit lacus. Viverra enim a sed adipiscing dictum mauris integer nunc.',
        imgLink: img3
      },

    ]
  );
  return (
    <div className='w-[100%] bg-white flex items-center flex-col gap-10  justify-center my-5  sm:p-5 p-2' data-aos="zoom-in-up" data-aos-duration="2500">
      <div className='  w-[100%] shadow-xl   flex items-center justify-center flex-col gap-2 '>
        {/* hEADING */}
        <div className='w-[90%] flex flex-col  justify-between items-center gap-3 sm:gap-0'>
          <div className='sm:text-[40px] sm:font-bold text-[28px] text-center sm:text-start mb-3 font-semibold'>Trusted By Millions of Customers</div>
          <div className='text-[#6E6E73] text-[20px] sm:text-[24px] font-[500] sm:w-[60%] mx-auto leading-7 text-center'>Our success in creating business solutions is due in large partspacially to talented and highly committed team.</div>
        </div>
        {/* COROUSEL PART */}
        <div className='w-[100%]   py-4 rounded-lg shadow-lg '>
          <ExplorePlatform_corousel items={items} cardType={'Review'} />
        </div>
      </div>
     
    </div>
  )
}

export default Reviews