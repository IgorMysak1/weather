import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//
import { ForecasteInfo, ButtonHourlyWeather } from "./index";
//
import "./styles/forecaste.scss";

export const Forecaste = () => {
  const {
    currentForecaste,
    nextDays,
    capitalCityForecaste,
    currentCapitalCity,
    searchedCapitalCity,
  } = useSelector((state) => ({
    currentForecaste: state.currentDayForecasteReducer.listDaysOfForecaste[0],
    nextDays: state.currentDayForecasteReducer.listDaysOfForecaste,
    capitalCityForecaste: state.currentDayForecasteReducer.capitalCityForecaste,
    currentCapitalCity: state.currentLocationReducer.location.capitalCity,
    searchedCapitalCity: state.searchedLocationReducer.location.country,
  }));

  return (
    <div className="forecaste">
      <div className="forecaste__current">
        <div className={`forecasteInfo avg`}>
          <ForecasteInfo
            size="avg"
            access="all"
            date={currentForecaste.date}
            listForecasts={currentForecaste.arr}
          />
          <Link to="/hourly_weather">
            <ButtonHourlyWeather text="Get hourly weather info" />
          </Link>
        </div>
        <div className="forecaste__next">
          {nextDays.slice(1, 3).map((day, index) => (
            <div className={`forecasteInfo min`} key={index}>
              <ForecasteInfo
                size="min"
                access="1,3,4"
                date={day.date}
                listForecasts={day.arr}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="forecaste__capital">
        <p className="forecasteInfo__capital">
          {searchedCapitalCity || currentCapitalCity}
        </p>
        {capitalCityForecaste.map((day, index) => (
          <div className={`forecasteInfo min`} key={index}>
            <ForecasteInfo
              size="min"
              access="1,3,4"
              date={day.date}
              listForecasts={day.arr}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
