'use client'
import Slider from "react-slick";
import CarouselItem from "./CarouselItem";

import './custom-slick.css';
import { LangProps } from "@/types/lang";
import { dictionary } from "@/i18n";

const Carousel = ({ lang }: LangProps) => {
  const wordings = dictionary[lang];

  return (
    <Slider
      dots
      autoplay
      infinite
      speed={1000}
      slidesToShow={1}
      slidesToScroll={1}
      className="overflow-hidden h-full bg-black"
    >
      <CarouselItem
        image="/img/home/1.jpg"
        alt="First slide"
        title={wordings.carousel_1.header}
        subtitle={wordings.carousel_1.title}
        description={wordings.carousel_1.desc}
      />
      <CarouselItem
        image="/img/home/3.jpeg"
        alt="Second slide"
        title={wordings.carousel_2.header}
        subtitle={wordings.carousel_2.title}
        description={wordings.carousel_2.desc}
      />
      <CarouselItem
        image="/img/home/2.jpg"
        alt="Third Slide"
        title={wordings.carousel_3.header}
        subtitle={wordings.carousel_3.title}
        description={wordings.carousel_3.desc}
      />
    </Slider>
  );
}

export default Carousel