import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  padding: 60px 6%;
  text-align: center;
`;

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledRow = styled.div`
  width: 100%;
`;

export const StyledTitle = styled.h2`
  color: #2d2d2d;
  font-size: 1.6rem;
  text-transform: uppercase;
  margin-bottom: 4px;
  letter-spacing: 0.5px;
  font-weight: bold;
`;

export const StyledSubTitle = styled.p`
  font-size: 1.4rem;
  color: #3e3e3e;
  margin-bottom: 30px;
  text-align: center;
`;

export const StyledSelect = styled.select`
  width: 50%;
  height: 45px;
  color: #3e3e3e;
  text-align: center;
  display: block;
  margin: 0 auto;
  margin-bottom: 15px;
  font-size: 1rem;
  letter-spacing: 0.3px;
`;

export const StyledOption = styled.option`
  width: 50%;
  color: #3e3e3e;
  text-align: center;
  margin: 0 auto;
`;

export const StyledTextarea = styled.textarea`
  width: 50%;
  height: 210px;
  text-align: center;
  line-height: 100%;
  padding: 6px 5px;
  display: block;
  color: #3e3e3e;
  margin: 0 auto;
  margin-bottom: 15px;
  font-size: 1.1rem;
  margin-top: 7px;
`;

export const StyledLabel = styled.label`
  font-size: 1.1rem;
  color: #3e3e3e;
  text-align: center;
`;

export const StyledPaymentLogo = styled.img`
  width: 236px;
  height: 136px;
  margin-top: 10px;
  padding: 30px;
  cursor: pointer;
  margin-bottom: 30px;
  transition: all 0.3s;

  &:hover {
    border: 1px solid #48b774;
    transition: all 0.3s;
    box-shadow: 1px 1px 4px #333;
  }
`;

export const StyledSummaryBox = styled.div`
  width: 60%;
  margin: 0 auto;
  background-color: #d1ffd1;
  padding: 30px 40px;
`;

export const StyledSummaryContainer = styled.div`
  width: auto;
  margin-bottom: 60px;
`;

export const StyledSummaryTitle = styled.h3`
  color: #0f0f0f;
  font-weight: 500;
  font-size: 1.5rem;
  text-transform: uppercase;

  &::after {
    content: "";
    display: block;
    border-bottom: 1px solid #707070;
    width: 35%;
    margin: 0 auto;
    margin-top: 20px;
  }
`;

export const StyledSummarySubTitle = styled.h4`
  font-size: 1rem;
  color: #161616;
  text-transform: uppercase;
  font-weight: 400;
  margin-bottom: 15px;
  margin-top: 25px;
`;

export const StyledSummaryLabel = styled.p`
  color: #292929;
  font-size: 1.1rem;
  margin-right: 4px;
  margin-bottom: 7px;
  text-align: center;
`;

export const StyledSummaryDetail = styled.span`
  color: #292929;
  font-weight: bold;
`;

export const StyledSummaryPrice = styled.span`
  background-color: #008a0e;
  border-radius: 4px;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  padding: 2px 5px;
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

  &:hover {
    background: #004072;
    transition: all 0.3s;
  }
`;
