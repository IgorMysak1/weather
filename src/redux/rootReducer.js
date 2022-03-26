import { combineReducers } from "redux";
import { currentLocationReducer } from "./reducers/currentLocationReducer";
import { searchedLocationReducer } from "./reducers/searchedLocationReducer";
import { currentDayForecasteReducer } from "./reducers/currentDayForecasteReducer";
import { settingsReducer } from "./reducers/settingsReducer";

export default combineReducers(
  {
    currentLocationReducer,
    searchedLocationReducer,
    currentDayForecasteReducer,
    settingsReducer,
  }
);
