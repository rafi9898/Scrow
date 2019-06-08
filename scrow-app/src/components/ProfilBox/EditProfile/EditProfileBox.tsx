import React, { Component } from "react";
import {
  StyledWrapper,
  StyledContainer,
  StyledRow,
  StyledLabel,
  StyledInput,
  StyledButtonPrimary
} from "./styled/EditStyled";
import { ProfileControls } from "../../../interfaces/EditProfile/ProfileControls";

class EditProfileBox extends Component<{}, ProfileControls> {
  state = {
    email: "r-podraza@wp.pl",
    firstName: "Rafał",
    lastName: "Podraza",
    city: "Świdnica",
    phone: 313313313,
    postCode: "58-100",
    street: "Nowotworksa 123",
    newPassword: "noewhaslo123"
  };

  setNewData = (e: React.FormEvent<HTMLInputElement>) => {
    const inpValue = e.currentTarget.value;
    const dataName = e.currentTarget.id;

    this.setState({
      [dataName]: inpValue
    } as any);
  };

  saveNewData = (e: any) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <StyledWrapper onSubmit={this.saveNewData}>
        <StyledContainer>
          <StyledRow>
            <StyledLabel>Email</StyledLabel>
            <StyledInput
              id="email"
              type="text"
              required
              value={this.state.email}
              onChange={this.setNewData}
            />

            <StyledLabel>Imię</StyledLabel>
            <StyledInput
              id="firstName"
              type="text"
              required
              value={this.state.firstName}
              onChange={this.setNewData}
            />

            <StyledLabel>Nazwisko</StyledLabel>
            <StyledInput
              id="lastName"
              type="text"
              required
              value={this.state.lastName}
              onChange={this.setNewData}
            />

            <StyledLabel>Miejscowość</StyledLabel>
            <StyledInput
              id="city"
              type="text"
              required
              value={this.state.city}
              onChange={this.setNewData}
            />
          </StyledRow>

          <StyledRow>
            <StyledLabel>Telefon</StyledLabel>
            <StyledInput
              id="phone"
              min={0}
              type="number"
              value={this.state.phone}
              onChange={this.setNewData}
            />

            <StyledLabel>Kod pocztowy</StyledLabel>
            <StyledInput
              id="postCode"
              type="text"
              value={this.state.postCode}
              onChange={this.setNewData}
            />

            <StyledLabel>Ulica, nr domu</StyledLabel>
            <StyledInput
              id="street"
              type="text"
              value={this.state.street}
              onChange={this.setNewData}
            />

            <StyledLabel>Nowe hasło</StyledLabel>
            <StyledInput
              id="newPassword"
              type="password"
              required
              value={this.state.newPassword}
              onChange={this.setNewData}
            />
          </StyledRow>
        </StyledContainer>

        <StyledButtonPrimary>Zapisz zmiany</StyledButtonPrimary>
      </StyledWrapper>
    );
  }
}

export default EditProfileBox;
