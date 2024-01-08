import React, { useEffect, useState } from 'react'

import jobImg from '../../assets/aboutUs/1624f4ff0a155f4c6e6099cb397c64cf.jpg'
import cultImg from '../../assets/aboutUs/culture.jpg';
import investorImg from '../../assets/aboutUs/investor.jpg';
import privacyImg from '../../assets/aboutUs/privacy.jpg';
import cancelImg from '../../assets/aboutUs/cancellation.jpg';

import Culture from './component/Culture';
import CancellationPolicy from './component/CancellationPolicy';
import Carrier from './component/Carrier';
import Investor from './component/Investor';
import PrivacyPol from './component/PrivacyPol';

import Aos from 'aos';
import "aos/dist/aos.css";

const AboutUs = () => {
    useEffect(() => {
        Aos.init({ duration: 2000, offset: '10px' })
      }, []);
    const [elem, setElem] = useState("Culture");

    const containerStyle = {
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url('${elem === 'Culture' ? cultImg
                : elem === 'CancellationPolicy' ? cancelImg
                    : elem === 'Investor' ? investorImg
                        : elem === 'Carrier' ? jobImg
                            : elem === 'PrivacyPolicy' ? privacyImg
                                : ''
            }') lightgray 50% / cover no-repeat`,
        backdropFilter: 'blur(2px)',
    };

    const handleSetElem = (val) => {
        setElem(val)
    }
    return (
        <div className='relative min-h-[70vh] font-SFPRODISPLAYREGULAR bg-white'>
            {/* Image Banner */}
            <div className='w-[100%]  '>
                <div className={` w-[100%] h-[300px] flex flex-col items-center gap-2 justify-center text-white text-[64px] font-[600] sm:h-[500px]  animate-trans-right ${elem == 'Culture' ? 'border-b-2 border-black' : 'hidden'}`} style={containerStyle} >       
                    <div className='sm:text-[60px] text-4xl text-center'>We focus on integrity</div>
                    <div className='sm:text-[30px] text-[17px] text-center font-[500]'>collaboration through a vibrant and inclusive company culture.</div>        
                </div>
                <div className={` w-[100%] h-[300px] sm:h-[500px] flex flex-col items-center gap-2  justify-center text-white text-[64px] font-[600]  animate-trans-right ${elem == 'Carrier' ? 'border-b-2 border-black' : 'hidden'}`} style={containerStyle}>
                    <div className='sm:text-[60px] text-4xl text-center'>Come and Join Us</div>
                    <div className='sm:text-[30px] text-[17px] text-center font-[500]'>Join the Powerful team of More then 100 people</div>
                </div>
                <div className={` w-[100%] h-[300px] sm:h-[500px] flex flex-col items-center gap-2  justify-center text-white  font-[700]  animate-trans-right ${elem == 'Investor' ? 'border-b-2 border-black' : 'hidden'}`} style={containerStyle}>
                    <div className='sm:text-[60px] text-4xl text-center'>Invest in Our Vision</div>
                    <div className='sm:text-[30px] text-[17px] text-center font-[500]'>Unleashing Growth and Innovation</div>
                </div>
                <div className={` w-[100%] h-[300px] sm:h-[500px] flex flex-col items-center gap-2  justify-center text-white text-[64px] font-[600]  animate-trans-right ${elem == 'PrivacyPolicy' ? 'border-b-2 border-black' : 'hidden'}`} style={containerStyle}>
                    <div className='sm:text-[60px] text-4xl text-center'>Privacy and Polices</div>
                    <div className='sm:text-[30px] text-[17px] text-center font-[500]'>Unleashing Growth and Innovation</div>
                </div>
                <div className={` w-[100%] h-[300px] sm:h-[500px] flex flex-col items-center gap-2  justify-center text-white text-[64px] font-[600]  animate-trans-right ${elem == 'CancellationPolicy' ? 'border-b-2 border-black' : 'hidden'}`} style={containerStyle}>
                    <div className='sm:text-[60px] text-4xl text-center'>Cancellation & Return Policy</div>
                    <div className='sm:text-[30px] text-[17px] text-center font-[500]'>Unleashing Growth and Innovation</div>
                </div>
            </div>

            {/* Navigator */}
            <div className=' transition-[2s] w-[100%] my-3 p-3 text-[18px] font-[500] flex  flex-wrap justify-center sm:gap-10 gap-5'>
                <div className={`${elem == 'Culture' ? 'border-b-2 border-black' : ''} cursor-pointer`} onClick={() => { handleSetElem('Culture') }}>Culture</div>
                <div className={`${elem == 'Carrier' ? 'border-b-2 border-black' : ''} cursor-pointer`} onClick={() => { handleSetElem('Carrier') }}>Carrier</div>
                <div className={`${elem == 'Investor' ? 'border-b-2 border-black' : ''} cursor-pointer`} onClick={() => { handleSetElem('Investor') }}>Investor</div>
                <div className={`${elem == 'PrivacyPolicy' ? 'border-b-2 border-black' : ''} cursor-pointer`} onClick={() => { handleSetElem('PrivacyPolicy') }}>PrivacyPolicy</div>
                <div className={`${elem == 'CancellationPolicy' ? 'border-b-2 border-black' : ''} cursor-pointer`} onClick={() => { handleSetElem('CancellationPolicy') }}>Cancellation & Return</div>
            </div>

            {/* Components */}
            <div className='flex text-white sm:py-10'>
                <div className={` w-[100%]   mx-auto  ${elem !== 'Culture' ? 'hidden' : ''}`}>
                    <Culture />
                </div>
                <div className={` w-[100%]  mx-auto  ${elem !== 'Carrier' ? 'hidden' : ''}`}>
                    <Carrier />
                </div>
                <div className={` w-[100%]  mx-auto  ${elem !== 'Investor' ? 'hidden' : ''}`}>
                    <Investor />
                </div>
                <div className={` w-[100%]  mx-auto ${elem !== 'PrivacyPolicy' ? 'hidden' : ''}`}>
                    <PrivacyPol />
                </div>
                <div className={` w-[100%]  mx-auto  ${elem !== 'CancellationPolicy' ? 'hidden' : ''}`}>
                    <CancellationPolicy />
                </div>
            </div>
    
        </div>
    )
}

export default AboutUs


