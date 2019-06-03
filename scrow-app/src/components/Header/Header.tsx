import React from "react";
import { StyledHeader } from "./styled/HeaderStyled";
import Navbar from "../Navbar/Navbar";
import HeaderContent from "./HeaderContent/HeaderContent";

const Header = () => {
  return (
    <StyledHeader>
      <Navbar />
      <HeaderContent />
    </StyledHeader>
  );
};

export default Header;
