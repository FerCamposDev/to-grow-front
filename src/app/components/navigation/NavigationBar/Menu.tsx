'use client'
import { useState } from 'react';

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      <button className="lg:hidden" onClick={toggleMenu}>
        {isOpen ? <i className="far fa-window-close text-3xl"></i> : <i className="fas fa-bars text-3xl"></i>}
      </button>

      <div className={`absolute w-screen -mr-5 py-5 bg-gray-900 z-50 top-8 right-0 flex-col text-center gap-5 ${isOpen ? 'flex' : 'hidden'} lg:p-0 lg:w-auto lg:flex-row lg:static lg:flex lg:flex-wrap lg:items-center lg:ml-auto lg:mt-0 lg:mr-0 lg:top-auto lg:left-auto lg:overflow-visible`}>
        <a href="#" onClick={toggleMenu} className="hover:text-primary">Home</a>
        <a href="#about" onClick={toggleMenu} className="hover:text-primary">About</a>
        <a href="#team" onClick={toggleMenu} className="hover:text-primary">Team</a>
        <a href="#services" onClick={toggleMenu} className="hover:text-primary">Services</a>
        <a href="#contact" onClick={toggleMenu} className="hover:text-primary">Contact</a>
      </div>
    </div>
  );
};

export default NavigationMenu;
