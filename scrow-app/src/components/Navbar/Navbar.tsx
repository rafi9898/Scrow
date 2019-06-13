import React, { Component } from "react";
import {
  StyledNavbar,
  StyledNavbarTitle,
  StyledList,
  StyledListElement,
  StyledHref
} from "./styled/NavbarStyled";
import windowSize from "react-window-size";
import MobileNavbar from "./MobileNavbar";

class Navbar extends Component<any, any> {
  render() {
    const navbarItem = this.props.windowWidth <= 600 ? <MobileNavbar /> : null;

    return (
      <StyledNavbar>
        {navbarItem ? (
          navbarItem
        ) : (
          <React.Fragment>
            <StyledNavbarTitle>TWOJANAZWA</StyledNavbarTitle>
            <StyledList>
              <StyledListElement>
                <StyledHref to="/">Strona Główna</StyledHref>
              </StyledListElement>

              <StyledListElement>
                <StyledHref to="/">Kontakt</StyledHref>
              </StyledListElement>
            </StyledList>{" "}
          </React.Fragment>
        )}
      </StyledNavbar>
    );
  }
}

export default windowSize(Navbar);
