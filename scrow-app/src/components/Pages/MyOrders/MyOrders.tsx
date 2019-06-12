import React from "react";
import { StyledWrapper } from "../../Style/Grid";
import Header from "../../Header/Header";
import Navs from "../../Navs/Navs";
import MyOrdersBox from "../../Layouts/MyOrdresBox/MyOrdersBox";
import Footer from "../../Footer/Footer";

const MyOrders = () => {
  return (
    <StyledWrapper>
      <Header />
      <Navs />
      <MyOrdersBox />
      <Footer />
    </StyledWrapper>
  );
};

export default MyOrders;
