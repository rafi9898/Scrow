import React, { Component } from "react";
import {
  StyledControlBox,
  StyledIconCog,
  StyledControlTitle,
  StyledFormBox,
  StyledInput,
  StyledButton
} from "./styled/PageControls";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { ConfigValue } from "../../interfaces/InstallerControls/Controls";

class InstallerControls extends Component<{}, ConfigValue> {
  constructor(props: ConfigValue) {
    super(props);

    this.state = {
      pageName: "",
      pageDescription: "",
      login: "",
      password: ""
    };
  }

  setDataWithForm = (e: any) => {
    const value: string = e.target.value;
    const inputId: string = e.target.id;

    this.setState({
      [inputId]: value
    });
  };

  setDataToDatabase = (e: any) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <StyledControlBox>
        <StyledIconCog icon={faCog} />
        <StyledControlTitle>Konfiguracja</StyledControlTitle>
        <StyledFormBox onSubmit={this.setDataToDatabase}>
          <StyledInput
            onChange={this.setDataWithForm}
            type="text"
            id="pageName"
            placeholder="Nazwa strony"
            required
          />
          <StyledInput
            onChange={this.setDataWithForm}
            type="text"
            id="pageDescription"
            placeholder="Opis strony"
            required
          />
          <StyledInput
            onChange={this.setDataWithForm}
            type="text"
            id="login"
            placeholder="Login"
            required
          />
          <StyledInput
            onChange={this.setDataWithForm}
            type="password"
            id="password"
            placeholder="Hasło"
            required
          />
          <StyledButton type="submit">INSTALUJ</StyledButton>
        </StyledFormBox>
      </StyledControlBox>
    );
  }
}

export default InstallerControls;
