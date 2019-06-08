import React from "react";
import {
  StyledWrapper,
  StyledTitle,
  StyledContainer,
  StyledRow,
  StyledIconEmail,
  StyledIconUser,
  StyledLabel,
  StyledSpan,
  StyledButtonDanger
} from "./styled/ProfilBoxStyled";

const ProfilBox = () => {
  return (
    <StyledWrapper>
      <StyledTitle>Twoje dane</StyledTitle>
      <StyledContainer>
        <StyledRow>
          <StyledSpan style={{ display: "block" }}>
            {" "}
            <StyledIconEmail />
            r-podraza@wp.pl
          </StyledSpan>

          <StyledIconUser />
          <StyledSpan>Rafał Podraza</StyledSpan>
        </StyledRow>

        <StyledRow>
          <StyledLabel>
            Kod pocztowy: <StyledSpan>58-100</StyledSpan>
          </StyledLabel>
          <StyledLabel>
            Miejcowość: <StyledSpan>Świdnica</StyledSpan>
          </StyledLabel>
          <StyledLabel>
            Ulica: <StyledSpan>Wschodnia 41</StyledSpan>
          </StyledLabel>
          <StyledLabel>
            Telefon: <StyledSpan>642 313 313</StyledSpan>
          </StyledLabel>
        </StyledRow>
      </StyledContainer>
      <StyledButtonDanger>Edytuj</StyledButtonDanger>
    </StyledWrapper>
  );
};

export default ProfilBox;
