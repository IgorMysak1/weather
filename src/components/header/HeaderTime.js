import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { checkDayOrNight } from "../index";
import { useClock } from "../../hooks/useClock";
import "./styles/headerTime.scss";

export const HeaderTime = () => {
  const clock = useClock();
  const [srcImg, setSrcImg] = useState("img/header/sun_moon.svg");
  const [sunrise = "", sunset] = useSelector((state) =>
    state.currentDayForecasteReducer.eventsPerDay.filter(
      (item) => item.event === "Sunrise" || item.event === "Sunset"
    )
  );

  useEffect(() => {
    if (!sunrise) return;
    checkDayOrNight(sunrise.timeUTC, sunset.timeUTC)
      ? setSrcImg("img/header/sunny_sun.svg")
      : setSrcImg("img/header/moon.svg");
  }, [sunrise]);

  return (
    <div className="header__time">
      <Link to="/">
        <img src={srcImg} alt="Weather" />
      </Link>
      <Link to="/time">
        <p className="header__hour">{clock.hour}</p>
        <p className="header__day">&ensp;{clock.day}</p>
      </Link>
    </div>
  );
};
