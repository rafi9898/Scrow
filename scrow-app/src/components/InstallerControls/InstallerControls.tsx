import React, { Component } from "react";
import {
  StyledControlBox,
  StyledIconCog,
  StyledControlTitle,
  StyledFormBox,
  StyledInput,
  StyledButton,
  StyledSuccessTitle,
  StyledSuccessSubTitle,
  StyleSuccessBox,
  StyledLink
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
      password: "",
      isInstalled: false
    };
  }

  setDataWithForm = (e: React.FormEvent<HTMLInputElement>) => {
    const value: string = e.currentTarget.value;
    const inputId: string = e.currentTarget.id;

    this.setState({
      [inputId]: value
    });
  };

  setDataToDatabase = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({
      isInstalled: true
    });
    console.log(this.state);
  };

  render() {
    const stageInstaller: JSX.Element = this.state.isInstalled ? (
      <StyledControlBox>
        <StyleSuccessBox>
          <StyledSuccessTitle>Udało się!</StyledSuccessTitle>
          <StyledSuccessSubTitle>
            Instalacja przebiegła pomyślnie.
          </StyledSuccessSubTitle>
          <StyledButton type="submit">
            <StyledLink to="/">PRZEJDŹ DO STRONY</StyledLink>
          </StyledButton>
        </StyleSuccessBox>
      </StyledControlBox>
    ) : (
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

    return stageInstaller;
  }
}

export default InstallerControls;
