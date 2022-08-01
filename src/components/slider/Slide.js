import React from "react";
import { useSelector } from "react-redux";
import "./styles/slide.scss";

export const Slide = ({
  clouds,
  currentTime,
  humidity,
  pressure,
  temp,
  wind,
  windConvert,
}) => {
  const settingsItems = useSelector(
    (state) => state.settingsReducer.settingsItems
  );
  return (
    <div className="slide">
      <div className="slide__hour">{currentTime}</div>
      <div className="slide__item">
        <p>Temp</p>
        <p>{temp}</p>
      </div>
      <div className="slide__item">
        <p>Wind</p>
        <p>{settingsItems["speed"] ? windConvert : wind}</p>
      </div>
      <div className="slide__item">
        <p>Clouds</p>
        <p>{clouds}</p>
      </div>
      <div className="slide__item">
        <p>Pressure</p>
        <p>{pressure}</p>
      </div>
      <div className="slide__item">
        <p>Humidity</p>
        <p>{humidity}</p>
      </div>
    </div>
  );
};
