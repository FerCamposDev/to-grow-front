'use client'
import { dictionary } from '@/i18n';
import { LangProps } from '@/types/lang';
import { useState } from 'react';
import LanguageSelector from './LangSelector';

const NavigationMenu = ({ lang }: LangProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const wordings = dictionary[lang];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      <div className='lg:hidden flex items-center gap-4'>
        <LanguageSelector />
        <button onClick={toggleMenu}>
          {isOpen ? <i className="far fa-window-close text-3xl"></i> : <i className="fas fa-bars text-3xl"></i>}
        </button>
      </div>


      <div className={`absolute w-screen -mr-5 py-5 bg-gray-900 z-50 top-8 right-0 flex-col text-center gap-5 ${isOpen ? 'flex' : 'hidden'} lg:p-0 lg:w-auto lg:flex-row lg:static lg:flex lg:flex-wrap lg:items-center lg:ml-auto lg:mt-0 lg:mr-0 lg:top-auto lg:left-auto lg:overflow-visible`}>
        <a href={`/${lang}#`} onClick={toggleMenu} className="hover:text-primary">{wordings.home}</a>
        <a href={`/${lang}#about`} onClick={toggleMenu} className="hover:text-primary">{wordings.about}</a>
        <a href={`/${lang}#team`} onClick={toggleMenu} className="hover:text-primary">{wordings.team}</a>
        <a href={`/${lang}#services`} onClick={toggleMenu} className="hover:text-primary">{wordings.services}</a>
        <a href={`/${lang}#contact`} onClick={toggleMenu} className="hover:text-primary">{wordings.contact}</a>
      </div>
    </div>
  );
};

export default NavigationMenu;
