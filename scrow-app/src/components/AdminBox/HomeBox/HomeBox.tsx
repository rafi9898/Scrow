import React, { Component } from "react";
import {
  StyledWrapper,
  StyledContainer,
  StyledTitle,
  StyledSubTitle,
  StyledDetailBox,
  StyledCount
} from "./styled/HomeBoxStyled";

class HomeBox extends Component {
  render() {
    return (
      <StyledWrapper>
        <StyledContainer>
          <StyledDetailBox>
            <StyledTitle>Statystyki</StyledTitle>
            <StyledSubTitle>Ilość produktów: </StyledSubTitle>
            <StyledCount>5</StyledCount>
            <StyledSubTitle>Ilość zamówień: </StyledSubTitle>
            <StyledCount>5</StyledCount>
            <StyledSubTitle>Liczba użytkowników: </StyledSubTitle>{" "}
            <StyledCount>68</StyledCount>
          </StyledDetailBox>
        </StyledContainer>
      </StyledWrapper>
    );
  }
}

export default HomeBox;
