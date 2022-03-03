import React, {useState} from 'react';
import Star from "./logo.svg";
import { Link } from 'react-scroll';
import {FaBars} from "react-icons/fa";
 

const Header
 = () => {
     const links = ["Home", "Features","Pricing", "Testimonial"];
     const toggle = () => {
     if( document.querySelector('#barContent').classList.contains('navBar')) {
        document.querySelector('#barContent').classList.remove('navBar');
        document.querySelector('#barContent').classList.add("barActive");
     }
     }
  return (
    <div className='headerContainer flex justify-between h-20 items-center px-4 bigtablet:px-12 bg-white w-screen drop-shadow-xl z-40'>
       <div className='LogoContainer'>
             <Star/>
       </div>
       <div className="menuLinks w-1/2 bigtablet:flex justify-between items-center h-full hidden ">
        {
            links.map((link, i) => (
                <Link
                to={link}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      key={i} className="cursor-pointer font-poppins text-base hover:text-button">
                {link}
                </Link>
            ))
        }
       </div>
       <button aria-label='Get Started' className='bg-transparent text-button text-xs bigtablet:text-base border-2 border-button font-poppins rounded-2xl px-4 py-2 hover:bg-button hover:text-white transition-all'>
           Get Started
       </button>
        <FaBars className='cursor-pointer text-2xl bigtablet:hidden' onClick={() => toggle()}/>
    </div>
  )
}

export default Header
