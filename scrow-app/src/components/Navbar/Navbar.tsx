import React, { Component } from "react";
import {
  StyledNavbar,
  StyledNavbarTitle,
  StyledList,
  StyledListElement,
  StyledHref
} from "./styled/NavbarStyled";

class Navbar extends Component {
  render() {
    return (
      <StyledNavbar>
        <StyledNavbarTitle>TWOJANAZWA</StyledNavbarTitle>
        <StyledList>
          <StyledListElement>
            <StyledHref to="/">Strona Główna</StyledHref>
          </StyledListElement>

          <StyledListElement>
            <StyledHref to="/">Kontakt</StyledHref>
          </StyledListElement>
        </StyledList>
      </StyledNavbar>
    );
  }
}

export default Navbar;
