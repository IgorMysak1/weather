import React, { Fragment } from "react";
//
import { hints } from "../index";
//
import "./styles/settingsHint.scss";

export const SettingsHint = ({ showHints }) => {
  return (
    <div className={showHints ? "settingsHint active" : "settingsHint"}>
      <div className="settingsHint__title">Hints</div>
      <div className="settingsHint__items">
        <div className="settingsHint__item">
          {hints.map((hint) => (
            <Fragment key={hint.text}>
              <p className="hints__title">{hint.title}</p>
              <p className="hints__text">{hint.text}</p>
              <br />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
