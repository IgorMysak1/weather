import React from "react";
import { LineDate } from "./index";
import { useClock } from "../hooks/useClock";
import "./styles/realTime.scss";

export const RealTime = () => {
  const clock = useClock();
  return (
    <div className="realTime">
      <div className="realTime__date">
        <p className="realTime__day">{clock.hour}</p>
        <p className="realTime__hour">{clock.day}</p>
      </div>
      <LineDate />
    </div>
  );
};
