import React, { Component } from "react";
import {
  StyledWrapper,
  StyledContainer,
  StyledSectionTitle,
  StyledOrdersBox,
  StyledOrderItem,
  StyledOrderTitle,
  StyledOrderLabel
} from "./styled/OrdersStyled";

class MyOrdersBox extends Component {
  render() {
    return (
      <StyledWrapper>
        <StyledContainer>
          <StyledSectionTitle>Moje zakupy</StyledSectionTitle>
          <StyledOrdersBox>
            <StyledOrderItem key={1}>
              <StyledOrderTitle>Strzyżenie włosów</StyledOrderTitle>
              <StyledOrderLabel>Dzisiaj o 14:30</StyledOrderLabel>
              <StyledOrderLabel>Status: Do wysyłki</StyledOrderLabel>
            </StyledOrderItem>

            <StyledOrderItem key={2} sended>
              <StyledOrderTitle>Strzyżenie włosów</StyledOrderTitle>
              <StyledOrderLabel>Dzisiaj o 14:30</StyledOrderLabel>
              <StyledOrderLabel>Status: Wysłano</StyledOrderLabel>
            </StyledOrderItem>
          </StyledOrdersBox>
        </StyledContainer>
      </StyledWrapper>
    );
  }
}

export default MyOrdersBox;
