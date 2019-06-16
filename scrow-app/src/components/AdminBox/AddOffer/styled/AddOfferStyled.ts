import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
`;

export const StyledTitle = styled.h2`
  font-size: 1.6rem;
  color: #434343;
  text-transform: uppercase;
  font-weight: 400;
  margin-bottom: 10px;
  letter-spacing: 0.3px;
  margin-bottom: 15px;
`;

export const StyledFormInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 2px 0px;
  text-align: center;
  font-size: 1rem;
  color: #464646;
  letter-spacing: 0.1px;
  margin-bottom: 13px;
  display: block;
`;

export const StyledFormSelect = styled.select`
  width: 100%;
  height: 40px;
  margin: 0 auto;
  padding: 2px 0px;
  display: block;
  text-align: center;
  font-size: 1rem;
  color: #464646;
  letter-spacing: 0.1px;
  margin-bottom: 5px;
  text-transform: uppercase;
`;

export const StyledFormOption = styled.option`
  width: 100%;
  height: 40px;
  padding: 2px 0px;
  text-align: center;
  font-size: 1rem;
  color: #464646;
  letter-spacing: 0.1px;
  margin: 0 auto;
  text-transform: uppercase;
`;

export const StyledForm = styled.form`
  width: 40%;
  margin: 0 auto;
  text-align: center;
`;

export const StyledRow = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledLabel = styled.label`
  letter-spacing: 0.2px;
  color: #464646;
  font-size: 1rem;
  margin-bottom: 2px;
  text-align: center;
  display: block;
`;

export const StyledFormArea = styled.textarea`
  width: 100%;
  height: 300px;
  display: block;
  padding: 2px 4px;
  font-size: 1rem;
  color: #464646;
  letter-spacing: 0.1px;
  margin-bottom: 10px;
`;

export const StyledButtonPrimary = styled.button`
  font-size: 1.1rem;
  color: #fff;
  background: #005291;
  text-transform: uppercase;
  margin-top: 10px;
  margin-bottom: 40px;
  border: none;
  outline: none;
  padding: 10px 40px;
  cursor: pointer;
  box-shadow: 0px 1px 5px #3b3b3b;
  transition: all 0.3s;

  @media (max-width: 500px) {
    font-size: 1rem;
    padding: 10px 20px;
  }

  &:hover {
    background: #004072;
    transition: all 0.3s;
  }
`;
