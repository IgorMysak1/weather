import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
//
import { convertTime } from "../services";
//

export const useClock = () => {
  const formatOfClock = useSelector(
    (state) => state.settingsReducer.settingsItems["time"]
  );
  const hourDayMonthYear = () => {
    const date = new Date();
    const formattedDate = date
      .toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
      .replace(/ /g, " ");
    return {
      hour: convertTime(date, formatOfClock, "current"),
      day: formattedDate,
    };
  };
  const [clock, setClock] = useState({});

  useEffect(() => {
    let timerId;
    setClock(hourDayMonthYear());
    setTimeout(() => {
      setClock(hourDayMonthYear());
      timerId = setInterval(() => {
        setClock(hourDayMonthYear());
      }, 60000);
    }, (60 - new Date().getSeconds()) * 1000);
    return () => {
      clearInterval(timerId);
      setClock({});
    };
  }, [formatOfClock]);
  return clock;
};
