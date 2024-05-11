'use client'
import Slider from "react-slick";
import CarouselItem from "./CarouselItem";

import './custom-slick.css';

type Props = {}

const Carousel = (props: Props) => {
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
        title="Drive Your Success"
        subtitle="Tailored Software Solutions"
        description="We offer advanced software solutions to drive your business growth, blending quality and customization at the forefront of technology."
      />
      <CarouselItem
        image="/img/home/3.jpeg"
        alt="Second slide"
        title="Strategic Partners"
        subtitle="Overcoming Technological Challenges"
        description="We turn technological challenges into opportunities for success. We are your strategic partners, committed to excellence and exceptional service."
      />
      <CarouselItem
        image="/img/home/2.jpg"
        alt="Third Slide"
        title="Unparalleled Experience"
        subtitle="Premium Customer Care"
        description="We stand out with exceptional customer care, overcoming technological barriers to ensure your success. Discover a unique experience with us."
      />
    </Slider>
  );
}

export default Carousel