import React, {useState} from 'react';
import Subscription from "../assets/key-feature/subscription.svg";
import Partnership from "../assets/key-feature/partnership.svg";
import { FaPlay} from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const Services = () => {
    const [isOpen, setOpen] = useState(false);
  return (
    <div className='bigtablet:mb-8 relative px-8 bigtablet:px-2 flex bigtablet:block'>
      
        <div className='w-screen space-x-8 flex flex-col-reverse items-center bigtablet:flex-row'>
       
          <div className='thumb w-full bigtablet:w-1/2  relative flex items-center'>
            <div className= {isOpen ? "relative block w-full h-3/4 flex items-center justify-center z-20": "hidden"}>
            <iframe className='iframe' src="https://www.youtube.com/embed/abRU2LEtVlU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <AiOutlineClose className='absolute top-0 right-0 text-3xl animate-bounce' onClick={() => setOpen(false)}/>
            </div>
           
              <button className=' relative pulse-btn flex justify-center items-center ' onClick={()=> setOpen(true)}>
                <span className='absolute animate-ping bg-button rounded-full opacity-75 w-full h-full'></span>
              <FaPlay className="text-5xl text-white"/>
  </button>
          </div>
          <div className=' w-full bigtablet:w-1/2'>
          <div>
        <p className='test-sm font-poppins text-button uppercase text-center bigtablet:text-left font-bold'>our services</p>
        <h1 className='font-poppins font-bold  text-center bigtablet:text-left  text-xl midtablet:text-4xl py-2 text-wrap capitalize bigtablet:w-3/4'>Business goals acheived with design</h1>
      </div>
      <div className='flex w-full py-8'>
          <Partnership className="w-1/4 animate-pulse"/>
          <div className='w-3/4'>
          <h3 className='font-bold font-poppins capitalize text-lg midtablet:py-2'>smart features</h3>
          <p className='font-poppins text-base capitalize text-center midtablet:text-left laptop:w-3/4 text-wrap'>
            get your blood tests delivered at home, collect a sample from your blood tests.
          </p>
          </div>
      </div>
      <div className='flex w-full'>
          <Subscription className="w-1/4 animate-pulse"/>
          <div className='w-3/4'>
          <h3 className='font-bold font-poppins capitalize text-lg midtablet:py-2'>secure contents</h3>
          <p className='font-poppins text-base capitalize text-center midtablet:text-left text-wrap laptop:w-3/4'>
            get your blood tests delivered at home, collect a sample from your blood tests.
          </p>
          </div>
      </div>
          </div>
      </div>
     
    </div>
  )
}

export default Services;