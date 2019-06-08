import React from "react";
import { StyledWrapper } from "./styled/SignIn";
import SignInForm from "../../Form/Authentication/SignInForm";
import Header from "../../Header/Header";
import Navs from "../../Navs/Navs";
import Footer from "../../Footer/Footer";

const SignIn = () => {
  return (
    <StyledWrapper>
      <Header />
      <Navs />
      <SignInForm />
      <Footer />
    </StyledWrapper>
  );
};

export default SignIn;
