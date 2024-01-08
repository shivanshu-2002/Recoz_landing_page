import React, { useEffect } from 'react'
import Banner from './components/Banner'
import ExplorePlatform from './components/ExplorePlatform'
import WhyChooseRezok from './components/WhyChooseRezok'
import UnlockNewSkills from './components/UnlockNewSkills'
import WorkFlow from './components/WorkFlow'
import Reviews from './components/Reviews'
import TeamAndGetInTouch from './components/TeamAndGetInTouch'


import Aos from 'aos';
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: '10px' })
  }, []);
  return (
    <div className=' p-0 m-0 font-SFPRODISPLAYREGULAR flex flex-col'>
      {/* Top Notification */}
      <div className='flex flex-col sm:gap-[60px] gap-6' >
        {/* Banner */}
        <Banner />
        {/* Explore Platform Section ---Contains Corousel */}
        <ExplorePlatform />
        {/* Why Choose Rezok */}
        <WhyChooseRezok />
        {/* {Unlock New Skills} */}
        <UnlockNewSkills />
        {/* Work Flow Page */}
        <WorkFlow />
        {/* Reviews */}
        <Reviews />
        {/* Team and Get in touch */}
        <TeamAndGetInTouch />
      </div>
    </div>
  )
}

export default Home


