import {
  TOTAL_FORECASTE_HOURLY,
  EVENTS_PER_DAY,
  LIST_DAYS_OF_FORECASTE,
  CAPITAL_CITY_FORECASTE,
} from "../CONSTANTS";

const initialState = {
  totalForecasteHourly: [],
  eventsPerDay: [],
  capitalCityForecaste: [],
  listDaysOfForecaste: [{ date: "~", arr: [] }],
};

export const currentDayForecasteReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOTAL_FORECASTE_HOURLY:
      return { ...state, totalForecasteHourly: action.totalForecasteHourly };
    case EVENTS_PER_DAY:
      return { ...state, eventsPerDay: action.eventsPerDay };
    case LIST_DAYS_OF_FORECASTE:
      return { ...state, listDaysOfForecaste: action.listDaysOfForecaste };
    case CAPITAL_CITY_FORECASTE:
      return { ...state, capitalCityForecaste: action.capitalCityForecaste };
    default:
      return state;
  }
};
