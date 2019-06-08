import React from "react";
import { StyledWrapper } from "./styled/SignUp";
import SignUpForm from "../../Form/Authentication/SignUpForm";
import Header from "../../Header/Header";
import Navs from "../../Navs/Navs";
import Footer from "../../Footer/Footer";

const SignUp = () => {
  return (
    <StyledWrapper>
      <Header />
      <Navs />
      <SignUpForm />
      <Footer />
    </StyledWrapper>
  );
};

export default SignUp;
