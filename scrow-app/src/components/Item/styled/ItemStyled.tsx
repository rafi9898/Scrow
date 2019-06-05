import styled from "styled-components";
import ItemLogo from "../../../assets/wlosy-logo.png";

export const StyledItemBox = styled.div`
  width: 40%;
  height: auto;
  color: #ffffff;
  box-shadow: 0px 1px 6px #333;
  border-radius: 10px;
  margin-bottom: 25px;
  margin-top: 25px;
  margin-right: 30px;
`;

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const StyledImgBox = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  top: 50px;
  margin-left: 40px;
  background-image: url(${ItemLogo});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const StyledContentBox = styled.div`
  width: 60%;
  height: 100%;
  text-align: center;
  padding: 20px 25px;
`;

export const StyledItemTitle = styled.h2`
  font-size: 1rem;
  color: #4b4b4b;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 7px;
`;

export const StyledItemPrice = styled.span`
  font-size: 0.9rem;
  color: #069719;
  display: block;
  margin-bottom: 9px;
  text-transform: uppercase;
`;

export const StyledItemDescription = styled.p`
  font-size: 0.9rem;
  color: #676767;
  text-align: center;
  margin-bottom: 24px;
`;

export const StyledItemButton = styled.button`
  background-color: #5c73bc;
  box-shadow: 0px 2px 6px #707070;
  color: #ffffff;
  font-weight: 500;
  font-size: 1rem;
  text-transform: uppercase;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 10px 65px;
  transition: all 0.3s;

  &:hover {
    transition: all 0.3s;
    background-color: #455ca4;
  }
`;
