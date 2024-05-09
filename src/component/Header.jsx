import React, { useState } from "react";
import { Link } from 'react-router-dom';

import companyLogo from '../assets/images/logo1.svg';

const Header = () => {
  
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='relative container mx-auto p-6 bg-slate-700'>
      {/* Flex Container */}
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <div className='pt-2'>
  <img src={companyLogo} alt='' className='w-16 h-16 rounded-full' />
</div>
        {/* Menu Items */}
        <div className='hidden space-x-6 md:flex'>
          <Link to='#' className='hover:text-darkGrayishBlue'>
            Feature1
          </Link>
          <Link to='#' className='hover:text-darkGrayishBlue'>
            Feature2
          </Link>
          <Link to='#' className='hover:text-darkGrayishBlue'>
            F7
          </Link>
          <Link to='#' className='hover:text-darkGrayishBlue'>
            F3
          </Link>
          <Link to='#' className='hover:text-darkGrayishBlue'>
            F4
          </Link>
        </div>
        {/* Button */}
        <div className='justify-center text-center gap-3 flex'>
        <Link
          to='/user-register'
          className='hidden p-3 px-6 pt-2 text-white bg-rose-700 rounded-full baseline hover:bg-cyan-300 md:block'
        >
          Register
        </Link>
        <Link
          to='/login'
          className='hidden p-3 px-6 pt-2 text-white bg-rose-700 rounded-full baseline hover:bg-cyan-300 md:block'
        >
          Login
        </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          className={
            toggleMenu
              ? 'open block hamburger md:hidden focus:outline-none'
              : 'block hamburger md:hidden focus:outline-none'
          }
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-bottom'></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className='md:hidden'>
        <div
          className={
            toggleMenu
              ? 'absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
              : 'absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
          }
        >
          <Link to='#'>Pricing</Link>
          <Link to='#'>Product</Link>
          <Link to='#'>About Us</Link>
          <Link to='#'>Careers</Link>
          <Link to='#'>Community</Link>
        </div>
      </div>
    </nav>
  )
};

export default Header;
