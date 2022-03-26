import React from "react";
import { useSelector } from "react-redux";
//
import { convertTime } from "../index";
//
import "./styles/hintIcon.scss";

export const HintIcon = ({
  width,
  event,
  timeUTC,
  src,
  visible,
  index,
  listOfEvents,
  setListOfEvents,
  hintCurrDate,
}) => {
  const kindOfDate = useSelector(
    (state) => state.settingsReducer.settingsItems["time"]
  );
  const toggleHint = (itemIndex, booleanToggle) => () => {
    if (width < 767.98) return;
    hintCurrDate.current.classList.toggle("active");
    const newArr = listOfEvents.map((item, currIndex) =>
      currIndex === itemIndex ? { ...item, visible: booleanToggle } : item
    );
    setListOfEvents(newArr);
  };

  return (
    <div className="hintIcon">
      {visible && (
        <p className="hintIcon__text">
          {`${timeUTC ? event : ""} ${convertTime(timeUTC, kindOfDate, event)}`}
          <span></span>
        </p>
      )}
      <img
        onMouseOver={toggleHint(index, true)}
        onMouseOut={toggleHint(index, false)}
        src={src}
        alt="Icon"
      />
    </div>
  );
};
