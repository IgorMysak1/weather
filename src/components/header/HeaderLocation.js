import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
//
import {
  ModalWindow,
  dispatchForecaste,
  dispatchCapitalCity,
  dataSearLocation,
} from "../index";

//
import "./styles/headerLocation.scss";

export const HeaderLocation = ({ isOpenModal, setIsOpenModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentLocation, searchedLocation } = useSelector((state) => ({
    currentLocation: state.currentLocationReducer.location,
    searchedLocation: state.currentLocationReducer.location,
  }));
  const redirect = () => {
    navigate("/forecaste");
    dispatch(dispatchForecaste(currentLocation.lat, currentLocation.lon));
    dispatch(dispatchCapitalCity(currentLocation.capitalCity));
    dispatch(
      dataSearLocation({
        ...searchedLocation,
        country: "",
      })
    );
  };

  return (
    <div className="header__location">
      {isOpenModal && (
        <ModalWindow
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
        />
      )}

      <Link to="/forecaste">
        <p onClick={redirect}>
          {currentLocation.city + ", " + currentLocation.country}
        </p>
      </Link>
      <img
        onClick={() => setIsOpenModal((prev) => !prev)}
        src="img/header/location.svg"
        alt="location"
      />
    </div>
  );
};
