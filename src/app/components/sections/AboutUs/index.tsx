import Image from 'next/image';
import React from 'react'

type Props = {}

const AboutUs = (props: Props) => {
  return (
    <div id="about" className="py-32">
      <div className='container mx-auto lg:px-48'>
        <div className='grid grid-cols-12 gap-16'>
          <div className='col-span-12 md:col-span-6 lg:col-span-5 h-100 flex justify-center'>
            <div className='h-100 flex justify-center items-center'>
              <div className="h-100 relative">
                <Image
                  alt="about-1"
                  src="/img/about/1.jpg"
                  height={450}
                  width={450}
                  className="h-auto w-3/4 rounded mb-24"
                />
                <div className="absolute top-1/4 left-1/4 w-3/4">
                  <Image
                    alt="about-2"
                    src="/img/about/2.jpg"
                    height={450}
                    width={450}
                    className="w-100 h-auto rounded"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-12 md:col-span-6 lg:col-span-7'>
            <h5 data-i18n="about_section.header" className="text-primary text-2xl font-bold">
              About Us
            </h5>
            <h1 data-i18n="about_section.title" className="mb-4 text-black text-4xl font-semibold">
              About ToGrow And It&apos;s Innovative IT Solutions
            </h1>
            <p data-i18n="about_section.desc1" className='text-gray-500'>
              We are a specialist software development company, with a focus on providing high quality, customized
              solutions to our clients. We offer a wide range of development services, from web and mobile applications to
              desktop software development and business process automation.
            </p>
            <br />
            <p data-i18n="about_section.desc2" className='text-gray-500'>
              With an agile approach and commitment to excellence, we specialize in creating digital
              experiences that drive business success. We collaborate closely with clients of all sizes, delivering
              innovative products and automating processes to optimize operational efficiency.
            </p>
            <br />
            <p data-i18n="about_section.desc3" className="mb-4 text-gray-500">
              Join us on the journey to
              digital transformation, where our software solutions take businesses to the next level with exceptional
              results.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;
