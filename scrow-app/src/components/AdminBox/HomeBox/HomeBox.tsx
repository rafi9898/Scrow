import React, { Component } from "react";
import {
  StyledWrapper,
  StyledContainer,
  StyledTitle,
  StyledSubTitle,
  StyledCount
} from "./styled/HomeBoxStyled";

class HomeBox extends Component {
  render() {
    return (
      <StyledWrapper>
        <StyledContainer>
          <StyledTitle>Statystyki</StyledTitle>
          <StyledSubTitle>
            Ilość produktów: <StyledCount>5</StyledCount>
          </StyledSubTitle>
          <StyledSubTitle>
            Ilość zamówień: <StyledCount>5</StyledCount>
          </StyledSubTitle>
          <StyledSubTitle>
            Liczba użytkowników: <StyledCount>68</StyledCount>
          </StyledSubTitle>
        </StyledContainer>
      </StyledWrapper>
    );
  }
}

export default HomeBox;
