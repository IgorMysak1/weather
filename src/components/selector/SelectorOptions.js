import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { OfferItems, dispatchForecaste, dispatchCapitalCity } from "../index";
import "./styles/selector.scss";

export const SelectorOptions = ({
  listCities,
  dataLocation,
  clearListCities,
  setInputs,
  setIsOpenModal = "",
}) => {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const selectPlace = (city, state, country, lat, lon) => () => {
    if (setIsOpenModal) setIsOpenModal(false);
    dispacth(dispatchCapitalCity(country));
    dispacth(dataLocation({ city, state, country, lat, lon }));
    dispacth(dispatchForecaste(lat, lon));
    dispacth(clearListCities());
    setInputs("");
    navigate("/forecaste");
  };

  return (
    <>
      <div className="selector__options">
        {listCities.map(
          ({ city = "", state = "", country = "", place_id, lat, lon }) => {
            return (
              <Fragment key={place_id}>
                <div
                  className="selector__option"
                  onClick={selectPlace(city, state, country, lat, lon)}
                >
                  <OfferItems city={city} state={state} country={country} />
                </div>
              </Fragment>
            );
          }
        )}
      </div>
    </>
  );
};
