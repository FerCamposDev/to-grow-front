'use client'
import { useParamsLangWordings } from '@/hooks/useParamsLangWordings';
import Image from 'next/image';

const AboutUs = () => {
  const { wordings } = useParamsLangWordings();

  return (
    <div id="about" className="py-32">
      <div className='container px-4 mx-auto xl:px-48'>
        <div className='flex flex-wrap md:flex-nowrap gap-10'>
          <div className='w-full md:w-1/2 lg:w-5/12 h-100 flex justify-center'>
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
          <div className='w-full md:w-1/2 lg:w-7/12'>
            <h5 className="text-primary text-2xl font-bold">
              {wordings.about_section.header}
            </h5>
            <h6 className="mb-4 text-black text-4xl font-semibold">
              {wordings.about_section.title}
            </h6>
            <p className='text-gray-500'>
              {wordings.about_section.desc1}
            </p>
            <br />
            <p className='text-gray-500'>
              {wordings.about_section.desc2}
            </p>
            <br />
            <p className="mb-4 text-gray-500">
              {wordings.about_section.desc3}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;
