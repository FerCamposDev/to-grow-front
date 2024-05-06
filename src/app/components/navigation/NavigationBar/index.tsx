import Image from 'next/image'
import React from 'react'

type Props = {}

const NavigationBar = (props: Props) => {
  return (
    <div className='bg-black text-white'>
      <div className="container mx-5 lg:mx-auto">
        <nav className="flex items-center justify-between py-2">
          <a href="/index.html" className="flex items-center ">
            <Image src="/img/favicon/android-chrome-192x192.png" alt="logo" width={50} height={50} />
            <h1 className="font-bold text-4xl">To<span className="text-secondary">Grow</span></h1>
          </a>
          <div className="hidden lg:block">
            <div className="navbar-collapse bg-transparent" id="navbarCollapse">
              <div className="navbar-nav ms-auto p-0">
                <a href="#" data-i18n="home" className="i18n nav-item text-secondary">Home</a>
                <a href="#about" data-i18n="about" className="i18n nav-item ml-4">About</a>
                <a href="#team" data-i18n="team" className="i18n nav-item ml-4">Team</a>
                <a href="#services" data-i18n="services" className="i18n nav-item ml-4">Services</a>
                <a href="#contact" data-i18n="contact" className="i18n nav-item ml-4">Contact</a>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex items-center">
            <div className="flex items-center justify-center me-4">
              <a
                target="_blank"
                href="https://wa.me/+541150595098?text=Hello%20I'm%20interested%20in%20create%20a%20new%20project"
                className="relative"
              >
                <i className="fab fa-whatsapp text-4xl"></i>
                <div className="absolute bottom-5 left-5">
                  <span><i className="fa fa-comment-dots text-secondary"></i></span>
                </div>
              </a>
            </div>
            <div className="flex flex-col">
              <span data-i18n="have_any_questions" className="i18n">Have any questions?</span>
              <span className="text-secondary">+5411 5059 5098</span>
            </div>
          </div>
        </nav>
      </div>
    </div>

  )
}

export default NavigationBar