import React, { useState } from 'react';
import { Menu, X, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from 'react-router-dom';
import logo from '../../assets/newlogo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className='bg-white shadow-md fixed top-0 z-50 w-full'>
      <div className='flex justify-between items-center px-4 py-3 md:h-20'>
        {/* Logo */}
        <div className='flex items-center'>
          <img src={logo} alt="Logo" className='h-16 md:h-24 w-auto' />
        </div>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation - Desktop */}
        <nav className='hidden md:flex gap-8 text-lg font-medium text-gray-700'>
          <Link to="/" className='hover:text-yellow-500 transition'>Home</Link>
          <Link to="/insurancepage" className='hover:text-yellow-500 transition'>Insurance Services</Link>
          <Link to="/financepage" className='hover:text-yellow-500 transition'>Financial Services</Link>
          <Link to="/blog" className='hover:text-yellow-500 transition'>Blog</Link>
          <Link to="/Aboutus" className='hover:text-yellow-500 transition'>About</Link>
          <Link to="/contact" className='hover:text-yellow-500 transition'>Contact</Link>
        </nav>

        {/* Social Icons - Desktop */}
        <div className='hidden md:flex gap-5 text-gray-700'>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <Instagram size={24} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
            <Linkedin size={24} />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition">
            <Youtube size={24} />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden px-4 pb-4 space-y-4'>
          <nav className='flex flex-col gap-4 text-lg font-medium text-gray-700'>
            <Link to="/" className='hover:text-yellow-500 transition' onClick={closeMenu}>Home</Link>
            <Link to="/insurancepage" className='hover:text-yellow-500 transition' onClick={closeMenu}>Insurance Services</Link>
            <Link to="/financepage" className='hover:text-yellow-500 transition' onClick={closeMenu}>Financial Services</Link>
            <Link to="/blog" className='hover:text-yellow-500 transition' onClick={closeMenu}>Blog</Link>
            <Link to="/Aboutus" className='hover:text-yellow-500 transition' onClick={closeMenu}>About</Link>
            <Link to="/contact" className='hover:text-yellow-500 transition' onClick={closeMenu}>Contact</Link>
          </nav>

          {/* Social Icons - Mobile */}
          <div className='flex gap-6 mt-4 text-gray-700 justify-center'>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
              <Instagram size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
              <Linkedin size={24} />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition">
              <Youtube size={24} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
