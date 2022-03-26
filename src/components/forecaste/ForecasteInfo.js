import React from "react";
//
import { ForecasteItem } from "../index";
//
import "./styles/forecasteInfo.scss";

export const ForecasteInfo = ({ size, access, date, listForecasts }) => {
  const accessItems = () => {
    if (access === "all") return listForecasts;
    const accessItems = access.split(",");
    return listForecasts.filter(
      (item, index) => accessItems.includes((index + 1).toString()) && item
    );
  };
  return (
    <>
      <div className={`forecasteInfo__day ${size}`}>{date}</div>
      {accessItems().map((items, index) => {
        return <ForecasteItem size={size} key={index} items={items} />;
      })}
    </>
  );
};
