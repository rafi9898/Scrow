import React from "react";
import { StyledWrapper } from "../../Style/Grid";
import Header from "../../Header/Header";
import Navs from "../../Navs/Navs";
import PaymentSuccessBox from "../../Layouts/PaymentSuccessBox/PaymentSuccessBox";
import Footer from "../../Footer/Footer";

const PaymentSuccess = () => {
  return (
    <StyledWrapper>
      <Header />
      <Navs />
      <PaymentSuccessBox />
      <Footer />
    </StyledWrapper>
  );
};

export default PaymentSuccess;
