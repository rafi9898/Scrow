import React from "react";
import {
  StyledWrapper,
  StyledTitle,
  StyledInput,
  StyledButtonSuccess
} from "./styled/AuthStyled";

const SignInForm = () => {
  return (
    <StyledWrapper>
      <StyledTitle>Zaloguj się</StyledTitle>
      <StyledInput type="email" placeholder="Adres email" required />
      <StyledInput type="password" placeholder="Hasło" required />
      <StyledButtonSuccess>Zaloguj</StyledButtonSuccess>
    </StyledWrapper>
  );
};

export default SignInForm;
