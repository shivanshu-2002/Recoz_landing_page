import React from 'react'

const CancellationPolicy = () => {
  return (
    <div className='w-[80%] mx-auto text-black flex flex-col gap-10'>
      <div className='text-[27px]   font-[500]'>
      <div className='sm:text-[48px] text-4xl text-center sm:text-start font-[500] font-SFPRODISPLAYREGULAR sm:my-3 border-b-2 sm:inline-block text-purple-900 border-black  py-2'>Cancellation & Return Policy</div>
        
      </div>
      <div>
        <div className='text-[25px] font-bold text-purple-900'>Introduction:</div>
        <div className='text-[20px]'>
          <div>At Makeup hub, we want to ensure your complete satisfaction with your purchases. If, for any reason, you are not satisfied with your order, you may cancel or return the products according to the following policy:</div>
        </div>
      </div>

      <div className='flex flex-col gap-3'>
        <div className='text-[25px] font-bold text-purple-900'>1. Cancellation Policy:</div>
        <li className='text-[20px] font-[400]'>If you wish to cancel your order, please do so within 24 hours of placing the order by contacting our customer support team.</li>
        <li className='text-[20px] font-[400]'>Cancellations made after 24 hours may not be possible if the order has already been processed or shipped.</li>
        <li className='text-[20px] font-[400]'>We reserve the right to cancel orders in case of unavailability of products or any other unforeseen circumstances. In such cases, a full refund will be provided.</li>
      </div>

      <div className='flex flex-col gap-3'>
        <div className='text-[25px] font-bold text-purple-900'>1. Return Policy:</div>
        <li className='text-[20px] font-[400]'>You may return eligible products within 14 days of the delivery date.</li>
        <li className='text-[20px] font-[400]'>Products must be unused, in their original packaging, and in resalable condition to be eligible for a return.</li>
        <li className='text-[20px] font-[400]'>Certain products, such as perishable items, intimate goods, and customized products, may not be eligible for return due to hygiene or other reasons. Please check the product description for specific return eligibility.</li>
        <li className='text-[20px] font-[400]'>To initiate a return, please contact our customer support team and provide the order details and reason for return.</li>
        <li className='text-[20px] font-[400]'>Return shipping costs may be applicable and will be the responsibility of the customer, unless the return is due to a mistake on our part or a defective product.</li>
        <li className='text-[20px] font-[400]'>Once the returned products are received and inspected, a refund will be processed within [X] business days. The refund will be issued in the original form of payment.</li>
      </div>

      <div className='flex flex-col gap-3'>
        <div className='text-[25px] font-bold text-purple-900'>1. Exchange Policy:</div>
        <li className='text-[20px] font-[400]'>If you wish to exchange a product for a different size, color, or variant, please contact our customer support team.</li>
        <li className='text-[20px] font-[400]'>Exchange requests are subject to product availability.</li>
        <li className='text-[20px] font-[400]'>The customer may be responsible for any price differences or additional shipping charges associated with the exchange.</li>
      </div>

      <div className='flex flex-col gap-3'>
        <div className='text-[25px] font-bold text-purple-900'>1. Damaged or Defective Products::</div>
        <li className='text-[20px] font-[400]'>If you receive a damaged or defective product, please contact our customer support team immediately.</li>
        <li className='text-[20px] font-[400]'>Provide details of the issue, along with supporting photographs if possible, to expedite the resolution process.</li>
        <li className='text-[20px] font-[400]'>We will arrange for a return or replacement of the damaged or defective product at no additional cost to you.</li>
      </div>
    </div>
  )
}

export default CancellationPolicy