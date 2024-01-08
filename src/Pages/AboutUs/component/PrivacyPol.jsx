import React, { useEffect } from 'react'




const PrivacyPol = () => {
    
    return (
        <div className='w-[80%] mx-auto text-black flex flex-col gap-10'>
            <div className='text-[27px]   font-[500]'>
                <div className='sm:text-[48px] text-4xl text-center sm:text-start font-[500] font-SFPRODISPLAYREGULAR sm:my-3 border-b-2 sm:inline-block text-purple-900 border-black  py-2'>Privacy Policy</div>
            </div>
            <div data-aos="fade-up">
                <div className='text-[25px] font-bold text-purple-900'>Description:</div>
                <div className='text-[20px]'>
                    <div>At Recoz, we value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.</div>
                    <div><span className='font-bold text-purple-900'>Purpose</span>: "This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website.</div>
                    <div><span className='font-bold text-purple-900'>Importance of privacy: </span>"We value your privacy and are committed to safeguarding your personal information."</div>
                </div>
            </div>
            <div className='flex flex-col gap-3' data-aos="fade-left">
                <div className='text-[25px] font-bold text-purple-900'>Types of Information Collected:</div>
                <div className='text-[20px] font-[400]'>We may collect personal information, such as your name, email address, and shipping address when you create an account or place an order on our website. Additionally, we may automatically collect certain information through cookies and other tracking technologies to enhance your browsing experience.</div>
            </div>
            <div className='flex flex-col gap-3' data-aos="fade-right">
                <div className='text-[25px] font-bold text-purple-900'>Use of Information:</div>
                <div className='text-[20px] font-[400]'>We use the information you provide to process your orders, communicate with you regarding your purchases, and provide customer support. We may also use your information to personalize your shopping experience and send you promotional emails about our products and offers.</div>
            </div>
            <div className='flex flex-col gap-3' data-aos="fade-up">
                <div className='text-[25px] font-bold text-purple-900'>Third-Party Disclosure:</div>
                <div className='text-[20px] font-[400]'>We may share your information with trusted third-party service providers, such as payment processors and shipping companies, to facilitate order processing and delivery. However, we do not sell or rent your personal information to third parties for marketing purposes.</div>
            </div>
            <div className='flex flex-col gap-3' data-aos="fade-right">
                <div className='text-[25px] font-bold text-purple-900'>Cookie Policy:</div>
                <div className='text-[20px] font-[400]'>We use cookies to enhance your browsing experience and analyze website traffic. These cookies may be essential for certain site functionalities or help us understand user preferences. By using our website, you consent to the use of cookies. You can manage your cookie preferences through your browser settings.</div>
            </div>
            <div className='flex flex-col gap-3' data-aos="fade-right">
                <div className='text-[25px] font-bold text-purple-900'>User Rights:</div>
                <div className='text-[20px] font-[400]'>You have the right to access, update, and delete your personal information stored in our systems. If you wish to exercise any of these rights or have any questions regarding your privacy, please contact our Privacy Officer using the information provided below.</div>
            </div>
            <div className='flex flex-col gap-3' data-aos="fade-right">
                <div className='text-[25px] font-bold text-purple-900'>Contact Information:</div>
                <div className='text-[20px] font-[400]'>If you have any questions or concerns about our privacy practices or this Privacy Policy, please contact our Privacy Officer at privacy@makeuphub.com</div>
            </div>
            <div className='flex flex-col gap-3' data-aos="fade-right">
                <div className='text-[25px] font-bold text-purple-900'>Updates to the Privacy Policy:</div>
                <div className='text-[20px] font-[400]'>We reserve the right to update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our website. We encourage you to review this policy periodically to stay informed about how we protect your information.</div>
            </div>

        </div>
    )
}

export default PrivacyPol