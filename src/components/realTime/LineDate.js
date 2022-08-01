import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
//
import { HintIcon, moveHintDate, useWindowDimension } from "../index";
import { useClock } from "../../hooks/useClock";
//
import "./styles/lineDate.scss";

export const LineDate = () => {
  const clock = useClock();
  const hintCurrDate = useRef(null);
  const [width] = useWindowDimension();
  const [listOfEvents, setListOfEvents] = useState([]);
  const [leftProcentHintDate, setLeftProcentHintDate] = useState(
    moveHintDate()
  );

  const { eventsPerDay } = useSelector((state) => ({
    eventsPerDay: state.currentDayForecasteReducer.eventsPerDay,
  }));
  const resizeWindow = () => {
    let trueFalse = width <= 767.98 ? true : false;
    setListOfEvents(
      eventsPerDay
        .sort((a, b) => a.timeUTC - b.timeUTC)
        .map((item) => ({
          ...item,
          visible: trueFalse,
        }))
    );
  };

  useEffect(() => {
    resizeWindow();
  }, [eventsPerDay, width]);

  useEffect(() => {
    const timerID = setInterval(() => {
      setLeftProcentHintDate(moveHintDate());
    }, 60000);
    return () => clearInterval(timerID);
  }, []);
  
  return (
    <div className="lineDate">
      <p className="lineDate__start">00:00</p>
      <div
        ref={hintCurrDate}
        className={`hintIcon__text lineDate__current ${
          leftProcentHintDate.procent >= 50 ? "move" : ""
        }`}
        style={{
          left: `calc(${leftProcentHintDate.procent} - ${leftProcentHintDate.pixels})`,
        }}
      >
        {clock.hour}
        <span
          style={{
            left: `calc(${leftProcentHintDate.procent} - ${leftProcentHintDate.pixelsSpan})`,
          }}
        ></span>
      </div>
      {listOfEvents.map(({ src, ...item }, index) => {
        return (
          <HintIcon
            key={src}
            {...item}
            src={src}
            index={index}
            listOfEvents={listOfEvents}
            setListOfEvents={setListOfEvents}
            width={width}
            hintCurrDate={hintCurrDate}
          />
        );
      })}
      <p className="lineDate__end">23:59</p>
    </div>
  );
};
