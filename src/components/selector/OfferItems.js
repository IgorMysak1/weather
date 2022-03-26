import React from "react";

export const OfferItems = ({ city, state, country }) => {
  return (
    <>
      <div className="selector__city">{`${city} ${state}`}</div>
      <div className="selector__wrap">
        <p>{country}</p>
      </div>
    </>
  );
};
