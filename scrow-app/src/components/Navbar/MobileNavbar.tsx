import React, { Component } from "react";
import {
  StyledWrapper,
  StyledHamburgerIcon,
  StyledMobileNavBox,
  StyledNavTitle,
  StyledContainer,
  StyledCloseIcon,
  StyledLinkWrapper,
  StyledLink
} from "./styled/MobileNavbarStyled";
import { NavbarValue } from "../../interfaces/MobileNav/NavControls";

class MobileNavbar extends Component<NavbarValue> {
  state = {
    isActive: false
  };

  setActiveNavbar = () => {
    const currentState = this.state.isActive;
    this.setState({
      isActive: !currentState
    });
  };

  render() {
    const mobileNavbarItem = this.state.isActive ? (
      <StyledMobileNavBox>
        <StyledContainer>
          <StyledNavTitle>Menu</StyledNavTitle>
          <StyledCloseIcon onClick={this.setActiveNavbar} />
        </StyledContainer>
        <StyledLinkWrapper>
          <StyledLink onClick={this.setActiveNavbar} to="/">
            Strona Główna
          </StyledLink>
          <StyledLink onClick={this.setActiveNavbar} to="/">
            Kontakt
          </StyledLink>
        </StyledLinkWrapper>
      </StyledMobileNavBox>
    ) : null;

    return (
      <StyledWrapper>
        <StyledHamburgerIcon onClick={this.setActiveNavbar} />
        {mobileNavbarItem}
      </StyledWrapper>
    );
  }
}

export default MobileNavbar;
