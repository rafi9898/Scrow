import React from "react";
import { StyledWrapper } from "../../Style/Grid";
import Header from "../../Header/Header";
import Navs from "../../Navs/Navs";
import PaymentBox from "../../Layouts/PaymentBox/PaymentBox";
import Footer from "../../Footer/Footer";

const Payment = () => {
  return (
    <StyledWrapper>
      <Header />
      <Navs />
      <PaymentBox />
      <Footer />
    </StyledWrapper>
  );
};

export default Payment;
