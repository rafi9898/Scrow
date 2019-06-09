import styled from "styled-components";
import { CreditCard } from "styled-icons/fa-solid/CreditCard";

export const StyledWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 70px 30px;
`;

export const StyledImgItem = styled.img`
  width: 250px;
  height: 250px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transition: all 0.3s;
    transform: scale(1.1);
  }
`;

export const StyledItemTitle = styled.h2`
  font-size: 1.7rem;
  text-transform: uppercase;
  color: #2d2d2d;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const StyledItemPrice = styled.p`
  text-transform: uppercase;
  color: #0f0f0f;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const StyledItemDescription = styled.p`
  font-size: 1.2rem;
  color: #404040;
  margin-bottom: 20px;
`;

export const SubTitleCount = styled.p`
  font-size: #404040;
  font-size: 1.2rem;
  color: #404040;
  margin-right: 5px;
  display: inline-block;
`;

export const StyledCounter = styled.input`
  width: 200px;
  height: 30px;
  text-align: center;
  font-size: 1.1rem;
  color: #343434;
`;

export const StyledIconCard = styled(CreditCard)`
  width: 20px;
  color: #ffffff;
  margin-right: 5px;
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

  &:hover {
    transition: all 0.3s;
    background-color: #141414;
  }
`;
