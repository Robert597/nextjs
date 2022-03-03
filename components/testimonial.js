import React from 'react';
import { FaStar } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ButtonGroup from './buttonGroup';
import Image from 'next/image';
import team1 from "../assets/team/member-1.png";
import team2 from "../assets/team/member-2.png";
import team3 from "../assets/team/member-3.png";
import team4 from "../assets/team/member-4.png";
import team5 from "../assets/team/member-5.png";
import team6 from "../assets/team/member-6.png";

const Testimonial = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 550 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 550, min: 0 },
      items: 1
    }
  };
  return (
    <div className='py-4 px-4 mb-8' name="Testimonial">
          <div>
        <p className='test-sm font-poppins text-button uppercase text-center font-bold'>Testimonial</p>
        <h1 className='font-poppins font-bold  text-center text-black   text-xl midtablet:text-2xl py-2  capitalize '>Meet client satisfaction</h1>
      </div>
      <div className=''>
      <Carousel
  swipeable={true}
  draggable={false}
  showDots={false}
  responsive={responsive}
  infinite={true}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  removeArrowOnDeviceType={["mobile", "tablet", "desktop"]}
  arrows={false}
  customButtonGroup={<ButtonGroup />}
  className=" laptop:ml-24 laptop:py-16 py-8"
>
    <div className='space-y-4 shadow-md  laptop:shadow-none laptop:hover:shadow-xl py-8 laptop:py-4 px-4 rounded-md mb-8 mx-4'>
      <div className='rating flex items-center'>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
        <FaStar className='text-gray-400'/>
      </div>
      <h1 className='font-bold font-poppins text-lg capitalize'>
        Modern look & trending design
      </h1>
      <p className='font-poppins text-base'>Get Working experience to work in this amazing team & in future want to work together for bright future projects and also make deposit to freelancer</p>
      <div className='flex items-center space-x-3'>
        <div className="border-2 border-button rounded-full w-12 h-12 ">
        <Image
            src={team6}
            alt="rec"
           />
        </div>
        <div>
          <p className='font-poppins text-lg font-bold'>Denny Hilguston</p>
          <p className='font-poppins text-sm font-bold text-button'>@dennyHill</p>
        </div>
      </div>
    </div>

    <div className='space-y-4 shadow-md  laptop:shadow-none laptop:hover:shadow-xl py-8 laptop:py-4 px-4 rounded-md mb-8 mx-4'>
      <div className='rating flex items-center'>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
        <FaStar className='text-gray-400'/>
        <FaStar className='text-gray-400'/>
      </div>
      <h1 className='font-bold font-poppins text-lg capitalize'>
       Design quality
      </h1>
      <p className='font-poppins text-base'>Get Working experience to work in this amazing team & in future want to work together for bright future projects and also make deposit to freelancer</p>
      <div className='flex items-center space-x-3'>
        <div className="border-2 border-button rounded-full w-12 h-12 ">
        <Image
            src={team2}
            alt="rec"
           />
        </div>
        <div>
          <p className='font-poppins text-lg font-bold'>Robert Hilguston</p>
          <p className='font-poppins text-sm font-bold text-button'>@robertHill</p>
        </div>
      </div>
      </div>

      <div className='space-y-4 shadow-md  laptop:shadow-none laptop:hover:shadow-xl py-8 laptop:py-4 px-4 rounded-md mb-8 mx-4'>
      <div className='rating flex items-center'>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
      </div>
      <h1 className='font-bold font-poppins text-lg capitalize'>
      Layout and organized layer
      </h1>
      <p className='font-poppins text-base'>Get Working experience to work in this amazing team & in future want to work together for bright future projects and also make deposit to freelancer</p>
      <div className='flex items-center space-x-3'>
        <div className="border-2 border-button rounded-full w-12 h-12 ">
        <Image
            src={team1}
            alt="rec"
           />
        </div>
        <div>
          <p className='font-poppins text-lg font-bold'>Igein Favour</p>
          <p className='font-poppins text-sm font-bold text-button'>@igeinHill</p>
        </div>
      </div>
      </div>

      <div className='space-y-4 shadow-md  laptop:shadow-none laptop:hover:shadow-xl py-8 laptop:py-4 px-4 rounded-md mb-8 mx-4'>
      <div className='rating flex items-center'>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
        <FaStar className='text-gray-400'/>
        <FaStar className='text-gray-400'/>
      </div>
      <h1 className='font-bold font-poppins text-lg capitalize'>
        Modern look & trending design
      </h1>
      <p className='font-poppins text-base'>Get Working experience to work in this amazing team & in future want to work together for bright future projects and also make deposit to freelancer</p>
      <div className='flex items-center space-x-3'>
        <div className="border-2 border-button rounded-full w-12 h-12 ">
        <Image
            src={team3}
            alt="rec"
           />
        </div>
        <div>
          <p className='font-poppins text-lg font-bold'>Alli Lukman</p>
          <p className='font-poppins text-sm font-bold text-button'>@alliHill</p>
        </div>
      </div>
      </div>

      <div className='space-y-4 shadow-md  laptop:shadow-none laptop:hover:shadow-xl py-8 laptop:py-4 px-4 rounded-md mb-8 mx-4'>
      <div className='rating flex items-center'>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
      </div>
      <h1 className='font-bold font-poppins text-lg capitalize'>
       Design quality
      </h1>
      <p className='font-poppins text-base'>Get Working experience to work in this amazing team & in future want to work together for bright future projects and also make deposit to freelancer</p>
      <div className='flex items-center space-x-3'>
        <div className="border-2 border-button rounded-full w-12 h-12 ">
        <Image
            src={team4}
            alt="rec"
           />
        </div>
        <div>
          <p className='font-poppins text-lg font-bold'>Okosun Adesuwa</p>
          <p className='font-poppins text-sm font-bold text-button'>@sleeky</p>
        </div>
      </div>
      </div>

      <div className='space-y-4 shadow-md  laptop:shadow-none laptop:hover:shadow-xl py-8 laptop:py-4 px-4 rounded-md mb-8 mx-4'>
      <div className='rating flex items-center'>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
        <FaStar className='text-gray-400'/>
        <FaStar className='text-gray-400'/>
      </div>
      <h1 className='font-bold font-poppins text-lg capitalize'>
       Layout and layout grid
      </h1>
      <p className='font-poppins text-base'>Get Working experience to work in this amazing team & in future want to work together for bright future projects and also make deposit to freelancer</p>
      <div className='flex items-center space-x-3'>
        <div className="border-2 border-button rounded-full w-12 h-12 ">
        <Image
            src={team5}
            alt="rec"
           />
        </div>
        <div>
          <p className='font-poppins text-lg font-bold'>Ayobami soul</p>
          <p className='font-poppins text-sm font-bold text-button'>@soul</p>
        </div>
      </div>
      </div>

      <div className='space-y-4 shadow-md  laptop:shadow-none laptop:hover:shadow-xl py-8 laptop:py-4 px-4 rounded-md mb-8 mx-4'>
      <div className='rating flex items-center'>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
        <FaStar className='text-red-600'/>
        <FaStar className='text-gray-400'/>
      </div>
      <h1 className='font-bold font-poppins text-lg capitalize'>
        Modern look & trending design
      </h1>
      <p className='font-poppins text-base'>Get Working experience to work in this amazing team & in future want to work together for bright future projects and also make deposit to freelancer</p>
      <div className='flex items-center space-x-3'>
        <div className="border-2 border-button rounded-full w-12 h-12 ">
        <Image
            src={team2}
            alt="rec"
           />
        </div>
        <div>
          <p className='font-poppins text-lg font-bold'>Anna Clinton</p>
          <p className='font-poppins text-sm font-bold text-button'>@Hannah</p>
        </div>
      </div>
      </div>

</Carousel>
      </div>
    </div>
  )
}

export default Testimonial;