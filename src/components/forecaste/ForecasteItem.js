import React from "react";
import { useSelector } from "react-redux";
//
import "./styles/forecasteItem.scss";

export const ForecasteItem = ({ size, items }) => {
  const settingsItems = useSelector(
    (state) => state.settingsReducer.settingsItems
  );

  return (
    <div className={`forecasteItem ${size}`}>
      {items.map(({ name, img, data, convertData, type }, index) => (
        <div
          key={img}
          className={`forecasteItem__side ${
            index ? "forecasteItem__right" : "forecasteItem__left"
          }`}
        >
          <img className={`forecasteItem__img ${size}`} src={img} alt="" />
          <p className={`forecasteItem__text ${size}`}>
            {`${name} ${settingsItems[type] ? convertData : data}`}
          </p>
        </div>
      ))}
    </div>
  );
};
