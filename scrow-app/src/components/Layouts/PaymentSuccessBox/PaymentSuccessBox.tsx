import React from "react";
import {
  StyledWrapper,
  StyledContainer,
  StyledRow,
  StyledSerpentineImg,
  StyledSuccessLabel,
  StyledSuccessMessage
} from "./styled/PaymentSuccessStyled";
import SerpentineImg from "../../../assets/serpentine.png";

const PaymentSuccessBox = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledRow>
          <StyledSerpentineImg src={SerpentineImg} alt="Serpentine image" />
        </StyledRow>

        <StyledRow>
          <StyledSuccessLabel>Sukces!</StyledSuccessLabel>
        </StyledRow>

        <StyledRow>
          <StyledSuccessMessage>
            Zamówienie złożone pomyślnie!
          </StyledSuccessMessage>
        </StyledRow>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default PaymentSuccessBox;
