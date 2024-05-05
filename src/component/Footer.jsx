import React from 'react';
import Logo from '../assets/logo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6 px-4 sm:px-6 lg:px-8 fixed bottom-0 left-0 w-full z-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="footer-column">
            <div className="footer-title text-white mb-4">
              <span>XYZ</span>
            </div>
            <div className="footer-content">
              <a href="#" className="text-gray-400 hover:text-white block mb-2">About</a>
              <a href="#" className="text-gray-400 hover:text-white block mb-2">Contact Us</a>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-title text-white mb-4">
              <span>for patients</span>
            </div>
            <div className="footer-content">
              <a href="#" className="text-gray-400 hover:text-white block mb-2">Blog</a>
              <a href="#" className="text-gray-400 hover:text-white block mb-2">Careers</a>
              <a href="#" className="text-gray-400 hover:text-white block mb-2">Press</a>
              <a href="#" className="text-gray-400 hover:text-white block mb-2">Contact Us</a>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-title text-white mb-4">
              <span>for Doctors</span>
            </div>
            <div className="footer-content">
              <a href="#" className="text-gray-400 hover:text-white block mb-2">Blog</a>
              <a href="#" className="text-gray-400 hover:text-white block mb-2">Careers</a>
              <a href="#" className="text-gray-400 hover:text-white block mb-2">Press</a>
              <a href="#" className="text-gray-400 hover:text-white block mb-2">Contact Us</a>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4 md:mt-0">
          <img src={Logo} alt="logo" className="h-12" />
          <div className="text-gray-400 text-sm">
            <span>Copyright © 2024, XYZ. </span>
            <span>All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
