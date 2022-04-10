import React from "react";
import { useSelector } from "react-redux";
//
import "./styles/home.scss";

export const Home = () => {
  const currentTemp = useSelector(
    (state) => state.currentDayForecasteReducer.totalForecasteHourly[0]
  );
  return (
    <div className="home">
      {/* Button*/}
      <div className="home__btns">
        <div className="home__hint">Don`t forget abot hint</div>
        <div className="home__temp">
          {currentTemp ? currentTemp.temp : "~°C"}
        </div>
      </div>
      {/* Text */}
      <div className="home__text">
        <p className="home__time">Local time</p>
        <p className="home__search">
          Check weather, simple enter city or country
        </p>
        <p className="home__weather">You can change current location</p>
      </div>
      {/* Landscapes */}
      <div className="home__landscape">
        <img className="land-1" src="img/winter.jpg" alt="Winter" />
        <img className="land-2" src="img/spring.jpg" alt="Rain" />
        <img className="land-3" src="img/autumn.jpg" alt="Fog" />
        <img className="land-4" src="img/summer.jpg" alt="Sea" />
      </div>
      {/* Icons */}
      <div className="home__icon">
        <div className="icon-1">
          <img src={"img/home/tornado_2.svg"} alt="Tornado" />
        </div>
        <div className="icon-2">
          <img src="img/home/tornado.svg" alt="Tornado" />
        </div>
        <div className="icon-3">
          <img src="img/home/lightning_cloud.svg" alt="Lightning cloud" />
        </div>
        <div className="icon-4">
          <img src="img/home/fire.svg" alt="Fire" />
        </div>
        <div className="icon-5">
          <img src="img/home/flowers.svg" alt="Flowers" />
        </div>
        <div className="icon-6">
          <img src="img/home/umbrella.svg" alt="Umbrella" />
        </div>
        <div className="icon-7">
          <img src="img/home/volcano.svg" alt="Volcano" />
        </div>
      </div>
      {/* Lines */}
      <div className="home__lines">
        <img
          className="big-line"
          src="img/home/big-dashed-line.svg"
          alt="Line"
        />
        <img
          className="medium-line"
          src="img/home/medium-dashed-line.svg"
          alt="Line"
        />
        <img
          className="small-line"
          src="img/home/small-dashed-line.svg"
          alt="Line"
        />
      </div>
    </div>
  );
};
