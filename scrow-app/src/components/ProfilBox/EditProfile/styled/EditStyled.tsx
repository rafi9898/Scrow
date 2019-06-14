import styled from "styled-components";

export const StyledWrapper = styled.form`
  width: 100%;
  text-align: center;
  padding: 3% 0;
`;

export const StyledContainer = styled.div`
  width: 100%;
  padding: 20px 160px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 995px) {
    flex-direction: column;
    padding: 20px 30px;
  }
`;

export const StyledRow = styled.div`
  width: 50%;
  padding: 0 30px;

  @media (max-width: 995px) {
    width: 100%;
  }
`;

export const StyledLabel = styled.label`
  color: #484848;
  text-align: center;
  font-size: 1.1rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  color: #484848;
  font-size: 1.2rem;
  height: 45px;
  text-align: center;
  margin-bottom: 15px;
  margin-top: 3px;

  @media (max-width: 500px) {
    font-size: 1rem;
  }
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
