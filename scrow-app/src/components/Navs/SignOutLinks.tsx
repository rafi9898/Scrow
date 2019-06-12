import React from "react";
import { StyledWrapper, StyledNavsLink } from "./styled/NavsStyled";

const SignOutLinks = () => {
  return (
    <StyledWrapper>
      <StyledNavsLink to="/profile">MÓJ PROFIL</StyledNavsLink>
      <StyledNavsLink to="/my-orders">MOJE ZAKUPY</StyledNavsLink>
      <StyledNavsLink to="#">WYLOGUJ</StyledNavsLink>
    </StyledWrapper>
  );
};

export default SignOutLinks;
