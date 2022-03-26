import {
  SEARCHED_LOCATION,
  SEARCHED_LIST_CITIES,
  CLEAR_SEARCHED_LIST_CITIES,
} from "../CONSTANTS";

const initialState = {
  location: { city: "", regionName: "", country: "", lat: "", lon: "" },
  listCities: [],
};

export const searchedLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCHED_LOCATION:
      return { ...state, location: action.location };
    case SEARCHED_LIST_CITIES:
      return { ...state, listCities: action.listCities };
    case CLEAR_SEARCHED_LIST_CITIES:
      return { ...state, listCities: [] };
    default:
      return state;
  }
};
