import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledControlBox = styled.div`
  width: 55%;
  height: 100%;
  background-color: #f8f8fa;
  border: 1px solid #5e5e5e;
  box-shadow: 0px 2px 5px #000000;
  border-radius: 18px;
  margin: 0 auto;
  margin-top: 9vh;
  text-align: center;
`;

export const StyledIconCog = styled(FontAwesomeIcon)`
  color: #009dbe;
  font-size: 2.5rem;
  margin-top: 30px;
  text-shadow: 1px 2px black;
`;

export const StyledControlTitle = styled.h2`
  font-size: 1.8rem;
  color: #283655;
  text-transform: uppercase;
  font-weight: 400;
  margin-top: 24px;
  margin-bottom: 20px;
`;

export const StyledSuccessTitle = styled.h1`
  font-size: 1.8rem;
  color: #283655;
  font-weight: bold;
  text-transform: uppercase;
`;

export const StyleSuccessBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

export const StyledSuccessSubTitle = styled.h2`
  font-size: 1.5rem;
  color: #283655;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 0.3px;
  margin-top: 18px;
  margin-bottom: 15px;
`;

export const StyledFormBox = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  width: 50%;
  height: 55px;
  color: #262626;
  margin: 0 auto;
  margin-top: 15px;
  padding: 12px 0px 12px 14px;
  font-size: 1rem;
`;

export const StyledButton = styled.button`
  background-color: #4d648d;
  box-shadow: 0px 1px 5px #000000;
  border: none;
  color: #ececec;
  font-size: 1.3rem;
  font-weight: bold;
  text-transform: uppercase;
  width: auto;
  margin: 0 auto;
  padding: 13px 23px;
  margin-top: 25px;
  letter-spacing: 0.3px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #3e5277;
    transition: all 0.3s;
  }
`;
