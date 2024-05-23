import React from 'react'
import Carousel from './Carousel'
import { LangProps } from '@/types/lang'

const HomeCarousel = ({ lang }: LangProps) => {
  return (
    <div className="container-fluid px-0">
      <Carousel lang={lang} />
    </div>
  )
}

export default HomeCarousel