import React from 'react'
import './our-services.css';

type Props = {}

const OurServices = (props: Props) => {
  return (
    <div id="services" className="services py-10">
      <div className="container px-2 mx-auto">
        <div className="text-center pb-10 max-w-xl mx-auto">
          <h5 className="font-semibold text-primary text-xl">
            Our Services
          </h5>
          <h6 className="font-semibold text-4xl">
            Services Built Specifically For Your Business
          </h6>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          <div className="services-item col shadow-xl p-6">
            <div className="services-content bg-white text-center">
              <div className="services-content-icon mb-4">
                <i className="fas fa-code text-9xl mb-4 text-primary"></i>
                <h4 className="mb-3 font-semibold text-2xl">Web Design</h4>
                <p className="text-gray-500">Web design goes beyond aesthetics;
                  it&apos;s about crafting captivating experiences that
                  reflect your brand identity. From visual layout to intuitive navigation, our web design approach aims
                  to turn visitors into customers, leaving a lasting impression.</p>
              </div>
            </div>
          </div>
          <div className="services-item col shadow-xl p-6">
            <div className="services-content bg-white text-center">
              <div className="services-content-icon mb-4">
                <i className="fas fa-file-code text-9xl mb-4 text-primary"></i>
                <h4 className="mb-3 font-semibold text-2xl">Web Development</h4>
                <p className="text-gray-500">Not only do we create websites but also solutions that drive user interaction. From speed optimization
                  to mobile adaptability, we ensure every aspect of your site functionality as well as user engagement
                  and loyalty.</p>
              </div>
            </div>
          </div>
          <div className="services-item col shadow-xl p-6">
            <div className="services-content bg-white text-center">
              <div className="services-content-icon mb-4">
                <i className="fas fa-external-link-alt text-9xl mb-4 text-primary"></i>
                <h4 className="mb-3 font-semibold text-2xl">UI/UX Design</h4>
                <p className="text-gray-500">UX/UI design is about connecting emotionally with your potential clients. Our experiences
                  are not only visually appealing (UI) but also provide an immersive narrative (UX). Each
                  interaction is strategically designed to foster user loyalty.</p>
              </div>
            </div>
          </div>
          <div className="services-item col shadow-xl p-6">
            <div className="services-content bg-white text-center">
              <div className="services-content-icon mb-4">
                <i className="fas fa-user-secret text-9xl mb-4 text-primary"></i>
                <h4 className="mb-3 font-semibold text-2xl">Web Security</h4>
                <p className="text-gray-500">Cybersecurity ensures customer trust. By proactively protecting valuable information, we
                  convey an image of a secure brand committed to privacy. Your security is our priority to build lasting
                  relationships with your customers.</p>
              </div>
            </div>
          </div>
          <div className="services-item col shadow-xl p-6">
            <div className="services-content bg-white text-center">
              <div className="services-content-icon mb-4">
                <i className="fas fa-envelope-open text-9xl mb-4 text-primary"></i>
                <h4 className="mb-3 font-semibold text-2xl">Digital Marketing</h4>
                <p className="text-gray-500">In the digital sphere, marketing is the key to standing out. From search engine
                  optimization (SEO) to crafting impactful social media campaigns. Our digital marketing approach
                  encourages online visibility and turns clicks into conversions.</p>
              </div>
            </div>
          </div>
          <div className="services-item col shadow-xl p-6">
            <div className="services-content bg-white text-center">
              <div className="services-content-icon mb-4">
                <i className="fas fa-laptop text-9xl mb-4 text-primary"></i>
                <h4 className="mb-3 font-semibold text-2xl">App Development</h4>
                <p className="text-gray-500">We develop applications that not only fulfill needs but create memorable experiences.
                  From mobile apps that streamline daily life to customized solutions, our app development approach
                  focuses on positive impact and user loyalty.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices