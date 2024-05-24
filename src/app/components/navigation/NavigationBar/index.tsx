'use client'
import Image from 'next/image'
import NavigationMenu from './Menu'
import { useClientLang } from '@/hooks/useClientLang'
import { LangProps } from '@/types/lang'
import { dictionary } from '@/i18n'
import LanguageSelector from './LangSelector'

const NavigationBar = ({ lang }: LangProps) => {
  const { homePath } = useClientLang();
  const wordings = dictionary[lang];

  return (
    <div className='bg-gray-900 text-white'>
      <div className="container px-5 lg:mx-auto">
        <nav className="flex items-center justify-between py-2">
          <a href={homePath} className="flex items-center ">
            <Image src="/img/favicon/android-chrome-192x192.png" alt="logo" width={50} height={50} />
            <h1 className="font-bold text-4xl">To<span className="text-secondary">Grow</span></h1>
          </a>
          <NavigationMenu lang={lang} />
          <div className="hidden lg:flex items-center">
            <div className='mr-4'>
              <LanguageSelector />
            </div>
            <div className="flex items-center justify-center me-4 animate-bounce">
              <a
                target="_blank"
                href={wordings.whatsapp}
                className="relative"
              >
                <i className="fab fa-whatsapp text-4xl"></i>
                <div className="absolute bottom-5 left-5">
                  <span><i className="fa fa-comment-dots text-secondary"></i></span>
                </div>
              </a>
            </div>
            <div className="flex flex-col">
              <span>{wordings.have_any_questions}</span>
              <span className="text-secondary">+5411 5059 5098</span>
            </div>
          </div>
        </nav>
      </div>
    </div>

  )
}

export default NavigationBar