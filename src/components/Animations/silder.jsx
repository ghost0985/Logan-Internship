import React from "react";
import Slider from "react-slick";


const sliderSettings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 200,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1195,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default sliderSettings;
