import React from "react";
import { StyledWrapper, StyledNavsLink } from "./styled/NavsStyled";

const SignInLinks = () => {
  return (
    <StyledWrapper>
      <StyledNavsLink to="/login">ZALOGUJ SIĘ</StyledNavsLink>
      <StyledNavsLink to="/register">ZAREJESTRUJ SIĘ</StyledNavsLink>
    </StyledWrapper>
  );
};

export default SignInLinks;
