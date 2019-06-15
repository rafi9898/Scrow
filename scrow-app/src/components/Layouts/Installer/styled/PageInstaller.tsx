import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const StyledContainer = styled.div`
  width: 96vw;
  height: 93vh;
  background: linear-gradient(to bottom, #38388e, #7162d9);
`;

export const StyledLogo = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 1px 2px #000000;
  margin-top: 23px;
  margin-left: 45px;
  text-transform: uppercase;

  @media (max-width: 1000px) {
    font-size: 1.4rem;
  }
`;

export const StyledSectionTitle = styled.p`
  font-size: 1.4rem;
  margin-left: 45px;
  margin-top: 2px;
  color: #c7c7c7;
  text-transform: uppercase;

  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }
`;

export const StyledPlanetImg = styled.img`
  position: absolute !important;
  right: -130px;
  width: 25%;
  bottom: -80px;

  @media (max-width: 1350px) {
    display: none;
  }
`;
