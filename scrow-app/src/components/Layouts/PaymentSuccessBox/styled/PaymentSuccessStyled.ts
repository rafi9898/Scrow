import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 130px 60px;
  width: 100%;
  text-align: center;
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const StyledRow = styled.div`
  width: auto;
`;

export const StyledSerpentineImg = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 20px;

  @media (max-width: 555px) {
    width: 50px;
    height: 50px;
  }
`;

export const StyledSuccessLabel = styled.span`
  padding: 7px 55px;
  border-radius: 40px;
  background-color: #e5e5e5;
  color: #484848;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 1.2rem;
  margin-top: 7px;
  border: 1px solid #707070;
  box-shadow: 0px 0px 2px #707070;

  @media (max-width: 555px) {
    padding: 7px 35px;
    font-size: 1rem;
  }
`;

export const StyledSuccessMessage = styled.p`
  text-transform: uppercase;
  font-size: 1.5rem;
  color: #484848;
  letter-spacing: 0.5px;
  margin-top: 25px;

  @media (max-width: 555px) {
    font-size: 1.2rem;
  }
`;
