import React, { useEffect } from "react";
import { CheckBox, useClickOutSide, checkBoxes, attribute } from "../index";
import "./styles/settings.scss";

export const SettingsMain = ({ toggleSettings, showContent, setShowHints }) => {
  const click = useClickOutSide("settings");
  useEffect(() => {
    if (!click) {
      toggleSettings();
      setShowHints(false);
    }
  }, [click]);
  return (
    <>
      {showContent && (
        <div className="settings__bottom">
          {checkBoxes.map(({ name, ...rest }) => (
            <CheckBox
              key={name}
              {...rest}
              name={name}
              changeAttribute={attribute}
            />
          ))}
        </div>
      )}
    </>
  );
};
