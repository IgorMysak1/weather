import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
//
import { convertTime } from "../services";
//

export const useClock = () => {
  const formatOfClock = useSelector(
    (state) => state.settingsReducer.settingsItems["time"]
  );
  const hourDayMonthYear = () =>
    convertTime(new Date(), formatOfClock, "current");

  const [clock, setClock] = useState(hourDayMonthYear());
  useEffect(() => {
    setClock(hourDayMonthYear());
    let intervalId;
    const timeOutId = setTimeout(() => {
      setClock(hourDayMonthYear());
      intervalId = setInterval(() => {
        setClock(hourDayMonthYear());
      }, 60000);
    }, (60 - new Date().getSeconds()) * 1000);
    return () => {
      timeOutId && clearTimeout(timeOutId);
      intervalId && clearInterval(intervalId);
    };
  }, [formatOfClock]);
  return clock;
};
