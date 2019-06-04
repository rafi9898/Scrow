import React from "react";
import { StyledWrapper, StyledNavsLink } from "./styled/NavsStyled";

const SignInLinks = () => {
  return (
    <StyledWrapper>
      <StyledNavsLink to="#">ZALOGUJ SIĘ</StyledNavsLink>
      <StyledNavsLink to="#">ZAREJESTRUJ SIĘ</StyledNavsLink>
    </StyledWrapper>
  );
};

export default SignInLinks;
