import React from "react";
import { StyledWrapper } from "../../Style/Grid";
import Header from "../../Header/Header";
import Navs from "../../Navs/Navs";
import ItemDetailsBox from "../../ItemDetailsBox/ItemDetailsBox";
import Footer from "../../Footer/Footer";

const ItemDetails = () => {
  return (
    <StyledWrapper>
      <Header />
      <Navs />
      <ItemDetailsBox />
      <Footer />
    </StyledWrapper>
  );
};

export default ItemDetails;
