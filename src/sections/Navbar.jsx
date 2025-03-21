import React, { useState, useEffect } from 'react';
import { navLinks } from '../constants/index.js';

const Navitems = () => {
  return (
    <ul className='nav-ul'>
      {navLinks.map(({id, href, name}) => (
        <li key={id} className='nav-li'>
          <a href={href} className='nav-li_a' onClick={() => {}}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  
  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className='fixed top-0 left-0 right-0 z-50 '>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center py-5 mx-auto c-space'>
          <img 
            src='assets/profile.png' 
            className={`w-10 h-10 transition-transform duration-300 ${
              isScrolling ? 'rotate-180' : ''
            }`}
          />
          <button 
            onClick={toggleMenu}
            className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex'
            aria-label='Toggle menu'
          >
            <img 
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"} 
              alt="toggle" 
              className='w-6 h-6'
            />
          </button>
          <nav className='sm:flex hidden'>
            <Navitems />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className='p-5'>
          <Navitems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;