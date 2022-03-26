import React, { useState, useEffect, forwardRef } from "react";
import { useDispatch } from "react-redux";
//
import { SelectorOptions } from "../index";
//
import "./styles/selector.scss";

export const Selector = forwardRef(
  (
    {
      getListCities,
      listCities,
      placeHolder,
      dataLocation,
      clearListCities,
      setIsOpenModal,
    },
    ref
  ) => {
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState("");
    const changesInput = (e) => {
      setInputs(e.target.value);
      !e.target.value && dispatch(clearListCities());
    };

    useEffect(() => {
      ref && ref.current.focus();
    });
    return (
      <div className="selector">
        <div className="selector__input">
          <input
            ref={ref}
            value={inputs}
            onChange={changesInput}
            type="text"
            placeholder={placeHolder}
            onKeyPress={(e) => e.key === "Enter" && getListCities(inputs)}
          />
          <img
            onClick={() => getListCities(inputs)}
            src="img/header/search_icon.svg"
            alt="search"
          />
        </div>
        {listCities.length > 1 && (
          <SelectorOptions
            listCities={listCities}
            dataLocation={dataLocation}
            clearListCities={clearListCities}
            inputs={inputs}
            setInputs={setInputs}
            setIsOpenModal={setIsOpenModal}
          />
        )}
      </div>
    );
  }
);
