import styled from "styled-components";
import { Email } from "styled-icons/material/Email";
import { User } from "styled-icons/boxicons-regular/User";
import { Link } from "react-router-dom";

export const StyledWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 55px 10px;
`;

export const StyledLink = styled(Link)``;

export const StyledTitle = styled.h2`
  font-size: 1.4rem;
  color: #484848;
  font-weight: 500;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 30px;
`;

export const StyledContainer = styled.div`
  width: 90%;
  height: auto;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 995px) {
    flex-direction: column;
    width: 95%;
  }
`;

export const StyledRow = styled.div`
  width: auto;
  padding: 10px 70px;

  @media (max-width: 995px) {
    padding: 10px 20px;
  }
`;

export const StyledIconEmail = styled(Email)`
  color: #000000;
  width: 25px;
  margin-right: 5px;
`;

export const StyledIconUser = styled(User)`
  color: #000000;
  width: 25px;
  margin-right: 5px;
`;

export const StyledLabel = styled.p`
  font-size: 1.2rem;
  color: #5e5e5e;
  margin-bottom: 4px;

  @media (max-width: 400px) {
    font-size: 1.1rem;
  }
`;

export const StyledSpan = styled.span`
  color: #484848;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 4px;

  @media (max-width: 400px) {
    font-size: 1.1rem;
  }
`;

export const StyledButtonDanger = styled.button`
  font-size: 1rem;
  color: #fff;
  background: #ff4e61;
  text-transform: uppercase;
  margin-top: 30px;
  margin-bottom: 40px;
  border: none;
  outline: none;
  padding: 10px 40px;
  cursor: pointer;
  box-shadow: 0px 1px 5px #3b3b3b;
  transition: all 0.3s;
  border-radius: 7px;

  @media (max-width: 400px) {
    padding: 10px 30px;
  }

  &:hover {
    background: #d84353;
    transition: all 0.3s;
  }
`;
