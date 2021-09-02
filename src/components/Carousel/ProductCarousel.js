import React from "react";
import Slider from "react-slick";

export const ProductCarousel = () => {
  const settings = {
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    touchThreshold: 12,
    slickGoTo: true,
  };

  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
      <div>
        <h3>7</h3>
      </div>
      <div>
        <h3>8</h3>
      </div>
      <div>
        <h3>9</h3>
      </div>
    </Slider>
  );
};
