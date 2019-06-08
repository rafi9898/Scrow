import React from "react";
import {
  StyledWrapper,
  StyledTitle,
  StyledInput,
  StyledButtonDanger
} from "./styled/AuthStyled";

const SignUpForm = () => {
  return (
    <StyledWrapper>
      <StyledTitle>Zarejestruj się</StyledTitle>
      <StyledInput type="email" placeholder="Adres email" required />
      <StyledInput type="text" placeholder="Imię" required />
      <StyledInput type="text" placeholder="Nazwisko" required />
      <StyledInput type="password" placeholder="Hasło" required />
      <StyledButtonDanger>Zarejstruj</StyledButtonDanger>
    </StyledWrapper>
  );
};

export default SignUpForm;
