import React from "react";
import { useSelector } from "react-redux";
import { Slide } from "../index";
import "./styles/slider.scss";

export const Slider = () => {
  const { hourlyForecaste } = useSelector((state) => ({
    hourlyForecaste: state.currentDayForecasteReducer.totalForecasteHourly,
  }));

  return (
    <div className="slider">
      {hourlyForecaste.map(({ wind, ...props }) => (
        <Slide key={wind} wind={wind} {...props} />
      ))}
    </div>
  );
};
