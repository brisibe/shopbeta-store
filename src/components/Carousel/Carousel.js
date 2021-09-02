import React from "react";
import Slider from "react-slick";
import { Image } from "../Images/Image";

const images = [
  {
    url: "Assets/Images/header1.jpg",
  },
  {
    url: "Assets/Images/header2.jpg",
  },
  {
    url: "Assets/Images/header3.jpg",
  },
];

export const Carousel = () => {
  const settings = {
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 12000,
  };

  return (
    <Slider {...settings}>
      {images.map((img, index) => (
        <div key={index}>
          <Image src={img.url} alt="carousel" w="100%" h="100%" />
        </div>
      ))}
    </Slider>
  );
};
