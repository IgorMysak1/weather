import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Selector,
  dispatchListCities,
  dataCurrLocation,
  clearCurrListCities,
} from "./index";
import "./styles/modalWindow.scss";

let lastSearched = "";

export const ModalWindow = ({ isOpenModal, setIsOpenModal }) => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { listCities, location } = useSelector((state) => ({
    listCities: state.currentLocationReducer.listCities,
    location: state.currentLocationReducer.location,
  }));
  const getListCities = (place) => {
    if (!place || place === location.city || lastSearched === place) return;
    lastSearched = place;
    dispatch(dispatchListCities(place, "current"));
  };

  return (
    <div className={isOpenModal ? "modalWindow active" : "modalWindow"}>
      <Selector
        getListCities={getListCities}
        listCities={listCities}
        placeHolder={location.city}
        dataLocation={dataCurrLocation}
        clearListCities={clearCurrListCities}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        ref={ref}
      />
    </div>
  );
};
