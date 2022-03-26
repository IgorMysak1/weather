import {
  TOTAL_FORECASTE_HOURLY,
  EVENTS_PER_DAY,
  LIST_DAYS_OF_FORECASTE,
  CAPITAL_CITY_FORECASTE,
} from "../CONSTANTS";

export const getTotalForecasteHourly = (totalForecasteHourly) => ({
  type: TOTAL_FORECASTE_HOURLY,
  totalForecasteHourly,
});
export const getEventsPerDay = (eventsPerDay) => ({
  type: EVENTS_PER_DAY,
  eventsPerDay,
});
export const getListDaysForecaste = (listDaysOfForecaste) => ({
  type: LIST_DAYS_OF_FORECASTE,
  listDaysOfForecaste,
});
export const getCapitalCityForecaste = (capitalCityForecaste) => ({
  type: CAPITAL_CITY_FORECASTE,
  capitalCityForecaste,
});
