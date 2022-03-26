import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
//
import { getLocalStorage, setLocalStorage, getSettingsItems } from "../index";
//
import "./styles/checkBox.scss";

export const CheckBox = ({ off, on, name, changeAttribute }) => {
  const dispatch = useDispatch();
  const switcherValue = useRef(null);
  const settingsItems = useSelector(
    (state) => state.settingsReducer.settingsItems
  );
  const toggle = () => {
    setLocalStorage("settings", {
      ...getLocalStorage("settings"),
      [name]: !settingsItems[name],
    });
    dispatch(
      getSettingsItems({ ...settingsItems, [name]: !settingsItems[name] })
    );
    console.log(settingsItems["theme"]);
    if (name === "theme") changeAttribute();
  };
  return (
    <label className={settingsItems[name] ? "toggle active" : "toggle"}>
      <input onClick={toggle} type="checkbox" />
      <span className={settingsItems[name] ? "slider active" : "slider"}></span>
      <div className="labels">
        <span
          name={name}
          ref={switcherValue}
          className={
            settingsItems[name] ? "labels__toggle active" : "labels__toggle"
          }
        >
          {settingsItems[name] ? off : on}
        </span>
      </div>
    </label>
  );
};
