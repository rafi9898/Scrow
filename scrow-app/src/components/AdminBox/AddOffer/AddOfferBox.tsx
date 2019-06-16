import React, { Component } from "react";
import {
  StyledWrapper,
  StyledContainer,
  StyledTitle,
  StyledFormInput,
  StyledFormSelect,
  StyledFormOption,
  StyledForm,
  StyledRow,
  StyledLabel,
  StyledFormArea,
  StyledButtonPrimary
} from "./styled/AddOfferStyled";

class AddOfferBox extends Component {
  render() {
    return (
      <StyledWrapper>
        <StyledContainer>
          <StyledTitle>Dodaj produkt</StyledTitle>
          <StyledForm>
            <StyledFormInput
              type="text"
              placeholder="Nazwa produktu"
              required
            />
            <StyledFormSelect>
              <StyledFormOption>Kategoria</StyledFormOption>
              <StyledFormOption>DOM I OGRÓD</StyledFormOption>
              <StyledFormOption>INNE</StyledFormOption>
            </StyledFormSelect>

            <StyledRow>
              <StyledFormInput
                type="number"
                min={0}
                placeholder="Cena"
                required
              />
              <StyledFormInput
                type="number"
                min={0}
                placeholder="Ilość sztuk"
                required
              />
            </StyledRow>
            <StyledFormInput
              type="number"
              placeholder="Koszt dostawy"
              required
            />

            <StyledLabel>Treść aukcji</StyledLabel>
            <StyledFormArea required />
            <StyledButtonPrimary>Dodaj produkt</StyledButtonPrimary>
          </StyledForm>
        </StyledContainer>
      </StyledWrapper>
    );
  }
}

export default AddOfferBox;
