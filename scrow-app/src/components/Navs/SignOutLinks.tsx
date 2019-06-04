import React from "react";
import { StyledWrapper, StyledNavsLink } from "./styled/NavsStyled";

const SignOutLinks = () => {
  return (
    <StyledWrapper>
      <StyledNavsLink to="#">MÓJ PROFIL</StyledNavsLink>
      <StyledNavsLink to="#">MOJE ZAKUPY</StyledNavsLink>
      <StyledNavsLink to="#">WYLOGUJ</StyledNavsLink>
    </StyledWrapper>
  );
};

export default SignOutLinks;
