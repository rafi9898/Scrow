import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 40vh;
  align-items: center;
  flex-direction: column;
  padding: 80px 20px;
`;

export const StyledContentTitle = styled.h2`
  color: #484848;
  font-weight: bold;
  font-size: 1.3rem;
`;

export const StyledContentSubTitle = styled.h3`
  color: #676767;
  font-weight: 500;
  font-size: 1.1rem;
  margin-top: 5px;
`;

export const StyledContentButton = styled.button`
  background: #62d38f;
  color: #ffffff;
  font-weight: 500;
  font-size: 0.9rem;
  box-shadow: 0px 0.4px 3px #333;
  border-radius: 5px;
  text-transform: uppercase;
  border: none;
  outline: none;
  padding: 7px 20px;
  margin-top: 13px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transition: all 0.3s;
    background-color: #42b570;
  }
`;
