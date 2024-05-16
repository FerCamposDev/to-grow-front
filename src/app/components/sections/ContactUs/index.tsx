import React from 'react'
import SectionTitle from '../../shared/SectionTitle'
import Form from './Form'

type Props = {}

const ContactUs = (props: Props) => {
  return (
    <div id="contact" className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <SectionTitle title='Get In Touch' description='Contact us for any questions'>
          <div className='text-gray-500'>
            <p className="mt-5 mb-0 px-2">
              We&apos;re here to assist you with any inquiries you may have. Whether you&apos;re interested in our software
              development services, have questions about a specific project, or just want to say hello, feel free to reach
              out to us using the form below.
            </p>
            <p className="mb-5">
              Your satisfaction is our priority, and we look forward to hearing from you!
            </p>
          </div>
        </SectionTitle>
        <div className="p-6 md:p-10 bg-green-100">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10 md:mb-0">
            <div className="bg-white rounded-xl p-3 md:p-5">
              <div className="flex items-center">
                <div className="bg-secondary rounded-full flex items-center justify-center w-16 h-16">
                  <i className="fas fa-map-marker-alt text-white text-3xl"></i>
                </div>
                <div className="ml-3">
                  <h4 className="text-primary text-2xl font-semibold">Address</h4>
                  <a href="https://maps.app.goo.gl/9HLdX3aV1kiakx3i6" target="_blank" className="text-sm font-semibold">RP2 KM 70, Buenos Aires</a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-3 md:p-5">
              <div className="flex items-center">
                <div className="bg-secondary rounded-full flex items-center justify-center w-16 h-16">
                  <i className="fa fa-phone text-white text-3xl"></i>
                </div>
                <div className="ml-3">
                  <h4 className="text-primary text-2xl font-semibold">Call Us</h4>
                  <a href="tel:+5411 5059 5098" target="_blank" className="text-sm font-semibold">+5411 5059 5098</a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-3 md:p-5">
              <div className="flex items-center">
                <div className="bg-secondary rounded-full flex items-center justify-center w-16 h-16">
                  <i className="fa fa-envelope text-white text-3xl"></i>
                </div>
                <div className="ml-3">
                  <h4 className="text-primary text-2xl font-semibold">Email Us</h4>
                  <a href="mailto:info@togrow.com.ar" target="_blank" className="text-sm font-semibold">info@togrow.com.ar</a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div className="w-full">
              <div className="p-1 rounded-lg h-full bg-green-300">
                <iframe className="rounded-lg w-full h-full" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d52212.18046398447!2d-58.09212050107928!3d-35.12515281635851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srp2%20km%2070!5e0!3m2!1ses-419!2sar!4v1705331155415!5m2!1ses-419!2sar" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>

            <div style={{ minHeight: '50vh '}}>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs