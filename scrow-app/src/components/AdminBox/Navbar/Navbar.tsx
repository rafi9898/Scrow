import React, { Component } from "react";
import {
  StyledNavbarBox,
  StyledContainer,
  StyledCloseIcon,
  StyledHamburgerIcon,
  StyledNavTitle,
  StyledLink,
  StyledLogoutLink,
  StyledWrapper
} from "./styled/NavbarStyled";
import { NavbarControl } from "../../../interfaces/AdminPanelNavbar/NavbarControl";

class Navbar extends Component<{}, NavbarControl> {
  state = {
    isOpen: false
  };

  setDisplayNavbar = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const showNavbar = this.state.isOpen ? (
      <StyledNavbarBox>
        <StyledContainer>
          <StyledCloseIcon onClick={this.setDisplayNavbar} />
          <StyledNavTitle>Panel Admina</StyledNavTitle>
          <StyledLink onClick={this.setDisplayNavbar} to="/admin">
            Kokpit
          </StyledLink>
          <StyledLink onClick={this.setDisplayNavbar} to="/admin">
            Dodaj produkt
          </StyledLink>
          <StyledLink onClick={this.setDisplayNavbar} to="/admin">
            Moje produkty
          </StyledLink>
          <StyledLink onClick={this.setDisplayNavbar} to="/admin">
            Historia zamówień
          </StyledLink>
          <StyledLink onClick={this.setDisplayNavbar} to="/admin">
            Ustawienia
          </StyledLink>
          <StyledLogoutLink onClick={this.setDisplayNavbar} to="/admin">
            Wyloguj
          </StyledLogoutLink>
        </StyledContainer>
      </StyledNavbarBox>
    ) : null;

    return (
      <StyledWrapper>
        <StyledHamburgerIcon onClick={this.setDisplayNavbar} />
        {showNavbar}
      </StyledWrapper>
    );
  }
}

export default Navbar;
