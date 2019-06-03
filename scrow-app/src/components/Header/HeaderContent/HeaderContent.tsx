import React, { Component } from "react";
import {
  StyledWrapper,
  StyledContentTitle,
  StyledContentSubTitle,
  StyledContentButton
} from "../styled/HeaderContent";
import { ContentValue } from "../../../interfaces/HeaderContent/Content";

class HeaderContent extends Component<{}, ContentValue> {
  state = {
    pageTitle: "Nazwa Strony",
    pageSubTitle: "Najlepsze usługi w twoim mieście",
    buttonText: "Nasza Oferta"
  };

  render() {
    return (
      <StyledWrapper>
        <StyledContentTitle>{this.state.pageTitle}</StyledContentTitle>
        <StyledContentSubTitle>{this.state.pageSubTitle}</StyledContentSubTitle>
        <StyledContentButton>{this.state.buttonText}</StyledContentButton>
      </StyledWrapper>
    );
  }
}

export default HeaderContent;
