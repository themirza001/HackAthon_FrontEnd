import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import doctorsData from '../assets/DoctorsData/DoctorsData.js';
import companyLogo from '../assets/images/logo1.svg';
import { doUserLogout, isUserLoggedIn } from '../auth/userIndex';
import { doDoctorLogout, isDoctorLoggedIn } from '../auth/doctorIndex';
import { toast } from 'react-toastify';
import { userLogout } from '../services/user_service';
import { doctorLogout } from '../services/doctor-service';
// import logo1 from

const Header = () => {
  // if(isDoctorLoggedIn){
  //     doUserLogout(()=>{
  //       toast.error('Logged-in as doctor')
  //     })
  // }else{
  //   if(isUserLoggedIn){
  //     doDoctorLogout(()=>{
  //       toast.error('Logged-in as user')
  //     })
  // }
  // }
  const [toggleMenu, setToggleMenu] = useState(false);
  const [newresList, setresList] = useState([]);
  const [searchtext, setsearchtext] = useState('');
  const [filteredreslist, setfilteredreslist] = useState([]);
  const navigate = useNavigate();

  const check = () => {
    if (isUserLoggedIn() && !isDoctorLoggedIn()) return true;
    else return false;
  };

  const handleLogout = () => {
    if (isUserLoggedIn()) {
      userLogout(() => {
        doUserLogout(() => {
          toast.success('USER logged out');
          navigate('/select-login');
        });
      });
    } else if (isDoctorLoggedIn()) {
      doctorLogout(() => {
        doDoctorLogout(() => {
          toast.success('DOCTOR logged out');
          navigate('/select-login');
        });
      });
    } else {
      toast.error('Already logged out');
    }
  };
  return (
    <nav className='relative container mx-auto p-6'>
      {/* Flex Container */}
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <div className='pt-2'>
          <img
            src={companyLogo}
            onClick={() => navigate('/')}
            alt=''
            className='w-16 h-16 rounded-full'
          />
        </div>
        {/* Menu Items */}
        <div className='hidden space-x-6 md:flex'>
          <Link to='#' className='hover:text-darkGrayishBlue'>
            Feature1
          </Link>
          <Link to='#' className='hover:text-darkGrayishBlue'>
            Feature2
          </Link>
          <Link to='/medicine' className='hover:text-darkGrayishBlue'>
            Medicine
          </Link>
          <Link to='#' className='hover:text-darkGrayishBlue'>
            F3
          </Link>
          {check() && (
            <>
              <Link to='/chat' className='hover:text-darkGrayishBlue'>
                MediBuddy
              </Link>
              <Link to='/doctorcard' className='hover:text-darkGrayishBlue'>
                Saviours
              </Link>
            </>
          )}
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center'>
          <form className='flex'>
            <input
              type='text'
              className='rounded-l-lg p-3 w-96 border-t border-b border-l text-gray-800 border-gray-200 bg-white mb-2 md:mb-0 md:mr-0 md:border-r-0'
              placeholder="Search... for Hospital's, Doctors, specialization"
            />
            <button
              type='submit'
              className='px-4 rounded-r-lg bg-cyan-500 text-white border-cyan-500 border-t border-b border-r'
            >
              Search
            </button>
          </form>
        </div>

        {/* Button */}
        {!isUserLoggedIn() && !isDoctorLoggedIn() && (
          <Link
            to='/select-signup'
            className='hidden p-3 px-6 pt-2 text-white bg-rose-700 rounded-full baseline hover:bg-cyan-300 md:block'
          >
            Login/signup
          </Link>
        )}
        {(isUserLoggedIn() || isDoctorLoggedIn()) && (
          <button
            className='hidden p-3 px-6 pt-2 text-white bg-rose-700 rounded-full baseline hover:bg-cyan-300 md:block'
            onClick={handleLogout}
          >
            Logout
          </button>
        )}

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
          {!isUserLoggedIn() && !isUserLoggedIn() && (
            <>
              <Link to='/login'>Login</Link>
              <Link to='/login'>Register</Link>{' '}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;

// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// import companyLogo from '../assets/images/logo.svg';

// const Navbar = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);

//   return (
//     <nav className='relative container mx-auto p-6'>
//       {/* Flex Container */}
//       <div className='flex items-center justify-between'>
//         {/* Logo */}
//         <div className='pt-2'>
//           <img src={companyLogo} alt='' />
//         </div>
//         {/* Menu Items */}
//         <div className='hidden space-x-6 md:flex'>
//           <Link to='#' className='hover:text-darkGrayishBlue'>
//             Pricing
//           </Link>
//           <Link to='#' className='hover:text-darkGrayishBlue'>
//             Product
//           </Link>
//           <Link to='#' className='hover:text-darkGrayishBlue'>
//             About Us
//           </Link>
//           <Link to='#' className='hover:text-darkGrayishBlue'>
//             Careers
//           </Link>
//           <Link to='#' className='hover:text-darkGrayishBlue'>
//             Community
//           </Link>
//         </div>
//         {/* Button */}
//         <Link
//           to='#'
//           className='hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block'
//         >
//           Get Started
//         </Link>

//         {/* Hamburger Icon */}
//         <button
//           className={
//             toggleMenu
//               ? 'open block hamburger md:hidden focus:outline-none'
//               : 'block hamburger md:hidden focus:outline-none'
//           }
//           onClick={() => setToggleMenu(!toggleMenu)}
//         >
//           <span className='hamburger-top'></span>
//           <span className='hamburger-middle'></span>
//           <span className='hamburger-bottom'></span>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div className='md:hidden'>
//         <div
//           className={
//             toggleMenu
//               ? 'absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
//               : 'absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
//           }
//         >
//           <Link to='#'>Pricing</Link>
//           <Link to='#'>Product</Link>
//           <Link to='#'>About Us</Link>
//           <Link to='#'>Careers</Link>
//           <Link to='#'>Community</Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
