import React from 'react';
import left from '../assets/shape-left.png';
import right from '../assets/shape-right.png';
import center from '../assets/banner-thumb.png';

import Image from 'next/image';

const Banner = () => {
  return (
    <div className=' w-screen relative' name="Home">
      <div className='pt-12 mb-4'>
     <h1 className='font-poppins text-3xl bigtablet:text-4xl font-bold text-center capitalize leading-normal'> Top quality digital <br/>products to explore</h1>
     </div>
     <p className='font-poppins text-base text-center py-4 leading-normal bigtablet:w-1/2 bigtablet:mx-auto'>Check out our website to find great software products  and deals! if you need a website or web application this is the place to go!</p>
     <div className='w-full flex justify-center'>
     <button className='bg-button py-2 px-8 text-base font-poppins rounded-xl text-white font-bold drop-shadow-lg hover:drop-shadow-xl'>Explore</button>
     </div>
        <div className='left'>
        <Image
      src={left}
      alt="design"
      sizes="50vw"
      height={600}
      layout= "responsive"
    />
    </div>
        <div className='right'>
        <Image
      src={right}
      alt="design"
      height={600}
      sizes="50vw"
layout= "responsive"
    />
        </div>
        <div className='pt-8 w-full flex justify-center mb-12'>
        <Image
      src={center}
      alt="design"
      width={900}
      
    />
        </div>
      </div>
  )
}

export default Banner;