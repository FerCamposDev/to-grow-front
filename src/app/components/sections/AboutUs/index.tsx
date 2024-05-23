'use client'
import { dictionary } from '@/i18n';
import { LangProps } from '@/types/lang';
import Image from 'next/image';
import { useParams } from 'next/navigation';

type Props = {}

const AboutUs = (props: Props) => {
  const { lang } = useParams<LangProps>();
  const wordings = dictionary[lang];

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
              We are a specialist software development company, with a focus on providing high quality, customized
              solutions to our clients. We offer a wide range of development services, from web and mobile applications to
              desktop software development and business process automation.
            </p>
            <br />
            <p className='text-gray-500'>
              With an agile approach and commitment to excellence, we specialize in creating digital
              experiences that drive business success. We collaborate closely with clients of all sizes, delivering
              innovative products and automating processes to optimize operational efficiency.
            </p>
            <br />
            <p className="mb-4 text-gray-500">
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
