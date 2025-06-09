import React from "react";

export const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev" onClick={onClick}>
      <i className="fa fa-chevron-left"></i>
    </div>
  );
};

export const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next" onClick={onClick}>
      <i className="fa fa-chevron-right"></i>
    </div>
  );
};

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 250,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  centerMode: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 520,
      settings: { slidesToShow: 1 },
    },
  ],
};

export default sliderSettings;
