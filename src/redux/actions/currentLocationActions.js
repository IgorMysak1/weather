import {
  CURRENT_LOCATION,
  CURRENT_LIST_CITIES,
  CLEAR_CURRENT_LIST_CITIES,
} from "../CONSTANTS";

export const dataCurrLocation = (location) => ({
  type: CURRENT_LOCATION,
  location,
});
export const dataCurrListCities = (listCities) => ({
  type: CURRENT_LIST_CITIES,
  listCities,
});
export const clearCurrListCities = () => ({
  type: CLEAR_CURRENT_LIST_CITIES,
});
