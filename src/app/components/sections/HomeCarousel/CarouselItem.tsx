import Image from 'next/image';
import React, { FC } from 'react'

type Props = {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
}

const CarouselItem: FC<Props> = ({ title, subtitle, description, image, alt }) => {
  return (
    <div style={{ minHeight: '70vh '}} className="flex justify-center items-center content-center md:h-screen relative bg-black bg-opacity-80">
      <Image
        src={image}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="z-0 bg-black bg-opacity-80"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div> {/* obscure layer */}
      <div className="z-10 text-white relative flex flex-col gap-5 justify-center items-center text-center">
        <h6 className="font-bold text-secondary text-xl md:text-2xl">{title}</h6>
        <h2 className="font-bold text-3xl md:text-7xl">{subtitle}</h2>
        <p className='w-10/12 md:w-1/2 md:text-xl'>{description}</p>
      </div>
    </div>
  )
}

export default CarouselItem