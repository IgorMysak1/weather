import {
  SEARCHED_LOCATION,
  SEARCHED_LIST_CITIES,
  CLEAR_SEARCHED_LIST_CITIES,
} from "../CONSTANTS";

export const dataSearLocation = (location) => ({
  type: SEARCHED_LOCATION,
  location,
});
export const dataSearListCities = (listCities) => ({
  type: SEARCHED_LIST_CITIES,
  listCities,
});
export const clearSearListCities = () => ({
  type: CLEAR_SEARCHED_LIST_CITIES,
});
