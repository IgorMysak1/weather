import React, { useState } from "react";
import { SettingsHint, SettingsMain } from "../index";
import "./styles/settings.scss";

export const Settings = () => {
  const [isOpenSetting, setIsOpenSetting] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showHints, setShowHints] = useState(false);

  const toggleSettings = () => {
    if (isOpenSetting) {
      let timeDelay = 0;
      if (showHints) {
        setShowHints(false);
        timeDelay = 800;
      }
      setTimeout(() => {
        setShowContent((prev) => !prev);
        setTimeout(() => {
          setIsOpenSetting((prev) => !prev);
        }, 200);
      }, timeDelay);
    } else {
      setIsOpenSetting((prev) => !prev);
      setTimeout(() => {
        setShowContent((prev) => !prev);
      }, 1400);
    }
  };
  return (
    <div className="settings">
      <div
        className={
          isOpenSetting ? "settings__wrapper active" : "settings__wrapper"
        }
      >
        <SettingsHint showHints={showHints} />
        <div className={showContent ? "settings__top active" : "settings__top"}>
          {showContent && (
            <img
              onClick={() => setShowHints((prev) => !prev)}
              className={
                isOpenSetting ? "settingsHintImg active" : "settingsHintImg"
              }
              src="img/header/hint.svg"
              alt="Settings"
            />
          )}
          <img
            className={isOpenSetting ? "settingsImg active" : "settingsImg"}
            onClick={toggleSettings}
            src="img/header/setting.svg"
            alt="Settings"
          />
        </div>
        {isOpenSetting && (
          <SettingsMain
            toggleSettings={toggleSettings}
            showContent={showContent}
            setShowHints={setShowHints}
          />
        )}
      </div>
    </div>
  );
};
