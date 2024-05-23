'use client'

import { useClientLang } from '@/hooks/useClientLang';
import { dictionary } from '@/i18n';
import Link from 'next/link'
import NavigationBar from './components/navigation/NavigationBar';
import Footer from './components/footer';

export default function NotFound() {
  const { lang, homePath } = useClientLang();
  const wordings = dictionary[lang];

  return (
    <html lang={lang}>
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
      </head>
      <body>
        <NavigationBar lang={lang} />
        <div style={{ minHeight: '550px' }} className="container-fluid my-10 h-full flex justify-center items-center">
          <div className="container mx-auto text-center py-5 flex justify-center items-center">
            <div className="w-full lg:w-6/12 flex flex-col justify-center items-center gap-5">
              <i className="fas fa-exclamation-triangle text-primary text-6xl"></i>
              <h1 className="text-6xl font-bold">404</h1>
              <h2 className="text-4xl font-bold">{wordings[404].title}</h2>
              <p className="text-lg text-gray-700">{wordings[404].desc}</p>
              <Link className='rounded-full py-3 px-5 font-semibold bg-primary shadow-lg hover:opacity-90 active:opacity-100' href={homePath}>
                {wordings[404].button}
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  )
}