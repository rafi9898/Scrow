import React from "react";
import Navbar from "../../AdminBox/Navbar/Navbar";
import AddOfferBox from "../../AdminBox/AddOffer/AddOfferBox";
import { StyledWrapper } from "./styled/AdminPanelStyled";

const AddOffer = () => {
  return (
    <StyledWrapper>
      <Navbar />
      <AddOfferBox />
    </StyledWrapper>
  );
};

export default AddOffer;
