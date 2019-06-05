import React from "react";
import { StyledFooter, StyledFooterAuthor } from "./styled/FooterStyled";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterAuthor>
        &copy; Copyright TwojaNazwa.pl - 2019
      </StyledFooterAuthor>
    </StyledFooter>
  );
};

export default Footer;
