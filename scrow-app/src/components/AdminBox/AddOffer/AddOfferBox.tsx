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
import { OfferControl } from "../../../interfaces/AddOffer/OfferControl";
import ImageUploader from "react-images-upload";

class AddOfferBox extends Component<{}, OfferControl> {
  state = {
    productName: "",
    productCategory: "",
    productPrice: 0,
    productCount: 0,
    productCostOfDelivery: 0,
    productDescription: "",
    pictures: [""]
  };

  setOfferData = (e: any) => {
    const controlType = e.currentTarget.id;
    const controlValue = e.currentTarget.value;

    this.setState({
      [controlType]: controlValue
    });
  };

  saveOfferData = (e: any) => {
    e.preventDefault();
    console.log("Dane zostały zapisane!");
  };

  onDrop = (picture: any) => {
    this.setState({
      pictures: this.state.pictures.concat(picture)
    });
  };

  render() {
    return (
      <StyledWrapper>
        <StyledContainer>
          <StyledTitle>Dodaj produkt</StyledTitle>
          <StyledForm onSubmit={this.saveOfferData}>
            <StyledFormInput
              onChange={this.setOfferData}
              id="productName"
              type="text"
              placeholder="Nazwa produktu"
              required
            />
            <StyledFormSelect id="productCategory" onChange={this.setOfferData}>
              <StyledFormOption>Kategoria</StyledFormOption>
              <StyledFormOption>DOM I OGRÓD</StyledFormOption>
              <StyledFormOption>INNE</StyledFormOption>
            </StyledFormSelect>

            <StyledRow>
              <StyledFormInput
                onChange={this.setOfferData}
                id="productPrice"
                type="number"
                min={0}
                placeholder="Cena"
                required
              />
              <StyledFormInput
                onChange={this.setOfferData}
                id="productCount"
                type="number"
                min={0}
                placeholder="Ilość sztuk"
                required
              />
            </StyledRow>

            <ImageUploader
              withIcon={true}
              withPreview={true}
              buttonText="Wybierz zdjęcia"
              fileSizeError="Zdjęcie jest za duże"
              onChange={this.onDrop}
              fileTypeError="Ten format zdjęcia jest nie obsługiwany"
              label="Maksymalny rozmiar dla zdjęcia wynosi 5mb, Formaty: '.jpg', '.gif', '.png', '.gif'"
              imgExtension={[".jpg", ".gif", ".png", ".gif"]}
              maxFileSize={5242880}
            />

            <StyledFormInput
              onChange={this.setOfferData}
              id="productCostOfDelivery"
              type="number"
              placeholder="Koszt dostawy"
              required
            />

            <StyledLabel>Treść aukcji</StyledLabel>
            <StyledFormArea
              onChange={this.setOfferData}
              id="productDescription"
              required
            />
            <StyledButtonPrimary>Dodaj produkt</StyledButtonPrimary>
          </StyledForm>
        </StyledContainer>
      </StyledWrapper>
    );
  }
}

export default AddOfferBox;
