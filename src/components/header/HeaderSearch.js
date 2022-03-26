import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//
import {
  Selector,
  dataSearLocation,
  clearSearListCities,
  dispatchListCities,
  dispatchForecaste,
} from "../index";
//
import "./styles/headerSearch.scss";
let lastSearched = "";
export const HeaderSearch = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentLocation, searchedLocation, listCities } = useSelector(
    (state) => ({
      currentLocation: state.currentLocationReducer.location,
      searchedLocation: state.searchedLocationReducer.location,
      listCities: state.searchedLocationReducer.listCities,
    })
  );

  const getListCities = (place) => {
    if (!searchedLocation.city && !place) {
      dispatch(dispatchForecaste(currentLocation.lat, currentLocation.lon));
      navigate("/forecaste");
    } else if (searchedLocation.city && !place) {
      navigate("/forecaste");
      dispatch(dispatchForecaste(searchedLocation.lat, searchedLocation.lon));
    } else {
      if (lastSearched === place) return;
      lastSearched = place;
      dispatch(dispatchListCities(place));
    }
  };

  return (
    <div className="header__search">
      <Selector
        getListCities={getListCities}
        listCities={listCities}
        placeHolder={
          searchedLocation.city ||
          searchedLocation.state ||
          searchedLocation.country ||
          currentLocation.city
        }
        dataLocation={dataSearLocation}
        clearListCities={clearSearListCities}
        bg="#efeaea"
        ref={ref}
      />
    </div>
  );
};
