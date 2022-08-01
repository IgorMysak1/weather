import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ForecasteItem,
  Slider,
  season,
  useSingleAndDoubleClick,
  getLocalStorage,
  setLocalStorage,
  simplyBackSrc,
  humanBackSrc,
} from "./index";
//
import "./styles/hourlyWeather.scss";

export const HourlyWeather = () => {
  const [pathArrow, setPathArrow] = useState(simplyBackSrc);
  const navigate = useNavigate();
  const capitalCityForecaste = useSelector(
    (state) => state.currentDayForecasteReducer.capitalCityForecaste
  );
  const goToPreviousPage = () => {
    navigate("/forecaste");
  };
  const changeIcon = () => {
    const src = pathArrow === simplyBackSrc ? humanBackSrc : simplyBackSrc;
    setPathArrow(src);
    setLocalStorage("srcButtonBack", src);
  };
  const click = useSingleAndDoubleClick(goToPreviousPage, changeIcon);

  const findSeasonOfYaer = () => {
    return season[new Date().getMonth()];
  };
  useEffect(() => {
    const checkLocalStorage = getLocalStorage("srcButtonBack");
    checkLocalStorage === null
      ? setLocalStorage("srcButtonBack", simplyBackSrc)
      : setPathArrow(checkLocalStorage);
  }, []);
  return (
    <div className="hourlyWeather">
      <div className="hourlyWeather__back" onClick={click}>
        <img src={pathArrow} alt="Back" />
      </div>
      <div className="hourlyWeather__forecaste">
        {capitalCityForecaste[0] &&
          capitalCityForecaste[0].arr.map((items, index) => (
            <ForecasteItem key={index} size={"avg"} items={items} />
          ))}
      </div>
      <div className="hourlyWeather__img">
        <img src={findSeasonOfYaer()} alt="Landscape" />
        <img src={findSeasonOfYaer()} alt="Landscape" />
      </div>
      <div className="hourlyWeather__slider">
        <Slider />
        <div className="hourlyWeather__pagination" />
      </div>
    </div>
  );
};
