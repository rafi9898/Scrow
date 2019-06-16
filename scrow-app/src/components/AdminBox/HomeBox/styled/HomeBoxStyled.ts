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
`;

export const StyledSubTitle = styled.p`
  font-size: 1.3rem;
  color: #434343;
  margin-bottom: 5px;
`;

export const StyledCount = styled.span`
  color: #434343;
  font-weight: bold;
  font-size: 1.3rem;
  margin-left: 3px;
`;
