import {
  CURRENT_LOCATION,
  CURRENT_LIST_CITIES,
  CLEAR_CURRENT_LIST_CITIES,
} from "../CONSTANTS";

const initialState = {
  location: {
    city: "City...",
    regionName: "",
    capitalCity: "Capital city...",
    country: "",
    lat: "",
    lon: "",
  },
  listCities: [],
};

export const currentLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_LOCATION:
      return { ...state, location: action.location };
    case CURRENT_LIST_CITIES:
      return { ...state, listCities: action.listCities };
    case CLEAR_CURRENT_LIST_CITIES:
      return { ...state, listCities: [] };
    default:
      return state;
  }
};
