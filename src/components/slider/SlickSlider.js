import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
//
import { Slide } from "../index";
//
import "./styles/slickSlider.scss";

export const SlickSlider = () => {
  const { hourlyForecaste } = useSelector((state) => ({
    hourlyForecaste: state.currentDayForecasteReducer.totalForecasteHourly,
  }));

  const PrevArrow = ({ onClick }) => {
    return (
      <img
        onClick={onClick}
        className="prevArrow"
        src="img/arrow.svg"
        alt="Arrow"
      />
    );
  };
  const NextArrow = ({ onClick }) => {
    return (
      <img
        onClick={onClick}
        className="nextArrow"
        src="img/arrow.svg"
        alt="Arrow"
      />
    );
  };
  const settings = {
    infinite: false,
    dots: true,
    dotsClass: "slick-dots active__dot",
    slidesToShow: 4.5,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: () => {
      return <div className="slick__dots"></div>;
    },

    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,

          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,

          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <Slider className="slickSlider" {...settings}>
      {hourlyForecaste.map(({ wind, ...props }) => (
        <Slide key={wind} wind={wind} {...props} />
      ))}
    </Slider>
  );
};
