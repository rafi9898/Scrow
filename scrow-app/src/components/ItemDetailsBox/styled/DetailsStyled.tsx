import styled from "styled-components";
import { CreditCard } from "styled-icons/fa-solid/CreditCard";

export const StyledWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 70px 30px;
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const StyledItemTitle = styled.h2`
  font-size: 1.7rem;
  text-transform: uppercase;
  color: #2d2d2d;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 1315px) {
    font-size: 1.4rem;
  }

  @media (max-width: 550px) {
    font-size: 1.2rem;
  }
`;

export const StyledItemPrice = styled.p`
  text-transform: uppercase;
  color: #0f0f0f;
  font-size: 1.2rem;
  margin-bottom: 10px;

  @media (max-width: 1315px) {
    font-size: 1.1rem;
  }

  @media (max-width: 550px) {
    font-size: 1rem;
  }
`;

export const StyledItemDescription = styled.p`
  font-size: 1.2rem;
  color: #404040;
  margin-bottom: 20px;

  @media (max-width: 1315px) {
    font-size: 1.1rem;
  }

  @media (max-width: 550px) {
    font-size: 1rem;
  }
`;

export const SubTitleCount = styled.p`
  font-size: #404040;
  font-size: 1.2rem;
  color: #404040;
  margin-right: 5px;
  display: inline-block;

  @media (max-width: 550px) {
    font-size: 1rem;
  }
`;

export const StyledCounter = styled.input`
  width: 200px;
  height: 30px;
  text-align: center;
  font-size: 1.1rem;
  color: #343434;

  @media (max-width: 1100px) {
    display: block;
    margin: 0 auto;
    margin-top: 3px;
  }
`;

export const StyledIconCard = styled(CreditCard)`
  width: 20px;
  color: #ffffff;
  margin-right: 5px;

  @media (max-width: 1315px) {
    width: 16px;
  }
`;

export const StyledItemButton = styled.button`
  background-color: #242424;
  box-shadow: 0px 2px 6px #707070;
  color: #ffffff;
  font-weight: 500;
  font-size: 1rem;
  text-transform: uppercase;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 15px 65px;
  transition: all 0.3s;
  margin-top: 30px;
  border-radius: 12px;
  display: block;
  margin: 0 auto;
  margin-top: 20px;

  @media (max-width: 1315px) {
    padding: 15px 45px;
  }

  @media (max-width: 550px) {
    font-size: 0.9rem;
    padding: 12px 35px;
  }

  &:hover {
    transition: all 0.3s;
    background-color: #141414;
  }
`;

export const StyledRow = styled.div`
  width: 30%;

  @media (max-width: 1100px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const StyledRowImage = styled.div`
  width: 20%;
  max-height: "250px !important";

  @media (max-width: 1100px) {
    margin: 0 auto;
    width: 50%;
    margin-bottom: 20px;
  }

  @media (max-width: 550px) {
    margin: 0 auto;
    width: 70%;
    margin-bottom: 20px;
  }
`;
