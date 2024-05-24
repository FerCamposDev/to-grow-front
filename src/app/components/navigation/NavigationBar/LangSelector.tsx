'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { useParamsLangWordings } from '@/hooks/useParamsLangWordings';
import { LANGS } from '@/i18n';
import { Lang } from '@/types/lang';
import { usePathname, useRouter } from 'next/navigation';
import useWidth from '@/hooks/useWidth';

const getFlagPath = (lang: Lang) => `/img/flags/${lang}.png`;

const LanguageSelector = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { lang } = useParamsLangWordings();
  const { isMobile } = useWidth();
  const [selectedLanguage, setSelectedLanguage] = useState(lang);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelection = (language: Lang) => {
    setSelectedLanguage(language);

    if (pathname.includes(`/${lang}`)) {
      return router.replace(pathname.replace(lang, language))
    }

    router.push(`/${lang}`);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-full rounded-md shadow-sm focus:outline-none"
      >
        <Image src={getFlagPath(selectedLanguage)} alt={selectedLanguage} className="w-6 h-4" width={20} height={15} />
        {!isMobile && (
          <svg className="w-5 h-5 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="z-50 origin-top-right absolute right-0 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="flex flex-col w-12">
            {LANGS.map(language => (
              <button
                key={language}
                onClick={() => handleSelection(language)}
                className="p-1 flex justify-center text-sm text-gray-700 rounded-md hover:bg-gray-200 hover:text-gray-900 focus:outline-none"
              >
                <Image src={getFlagPath(language)} alt={language} className="w-6 h-4" width={20} height={15} />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
