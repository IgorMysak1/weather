import React, { useState } from "react";
import { HeaderTime, HeaderSearch, HeaderLocation, Settings } from "../index";
import "./styles/header.scss";

export const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className="header">
      <HeaderTime />
      <HeaderSearch />
      <HeaderLocation
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
      <Settings />
    </div>
  );
};
