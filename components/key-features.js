import React from 'react'
import Partnership from "../assets/key-feature/partnership.svg";
import Performance from "../assets/key-feature/performance.svg";
import Subscription from "../assets/key-feature/subscription.svg";
import Support from "../assets/key-feature/support.svg";

const Key = () => {
  return (
    <div className='w-screen py-8'>
      <div>
        <p className='test-sm font-poppins text-button uppercase text-center font-bold'>Whats the function</p>
        <h1 className='font-poppins font-bold text-center text-xl midtablet:text-2xl py-2'>Meet the feature of our product</h1>
      </div>
      <div className='gridContainer grid grid-cols-1 midtablet:grid-cols-2 laptop:grid-cols-4 px-8 grid-gap-4 py-12'>
        <div className='card mb-8 laptop:mb-0 flex flex-col items-center midtablet:block'>
          <Performance className="animate-pulse"/>
          <h3 className='font-bold font-poppins capitalize text-lg midtablet:py-2'>fast performance</h3>
          <p className='font-poppins text-sm capitalize text-center midtablet:text-left'>
            get your blood tests delivered at home, collect a sample from your blood tests.
          </p>
        </div>
        <div className='card flex flex-col items-center midtablet:block mb-8'>
          <Partnership 
          className="animate-pulse"/>
          <h3 className='font-bold font-poppins capitalize text-lg midtablet:py-2'>partnership deal</h3>
          <p className='font-poppins text-sm capitalize text-center midtablet:text-left'>
            get your blood tests delivered at home, collect a sample from your blood tests.
          </p>
        </div>
        <div className='card flex flex-col items-center midtablet:block mb-8'>
          <Subscription 
          className="animate-pulse"/>
          <h3 className='font-bold font-poppins capitalize text-lg midtablet:py-2'>pro subscription</h3>
          <p className='font-poppins text-sm capitalize text-center midtablet:text-left'>
            get your blood tests delivered at home, collect a sample from your blood tests.
          </p>
        </div>
        <div className='card flex flex-col items-center midtablet:block mb-8'>
          <Support className="animate-pulse"/>
          <h3 className='font-bold font-poppins capitalize text-lg midtablet:py-2'>Customer Support</h3>
          <p className='font-poppins text-sm capitalize text-center midtablet:text-left'>
            get your blood tests delivered at home, collect a sample from your blood tests.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Key;