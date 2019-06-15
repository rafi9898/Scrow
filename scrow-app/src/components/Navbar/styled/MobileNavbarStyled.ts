import styled from "styled-components";
import { Navicon } from "styled-icons/evil/Navicon";
import { Close } from "styled-icons/material/Close";
import { Link } from "react-router-dom";

import { keyFrameSildeNav } from "./KeyFrames";

export const StyledWrapper = styled.div`
  width: auto;
`;

export const StyledHamburgerIcon = styled(Navicon)`
  width: 60px;
  color: #000;
  cursor: pointer;
`;

export const StyledMobileNavBox = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #232323;
  animation: ${keyFrameSildeNav} 1s ease-in-out 0s;
  animation-fill-mode: backwards, forwards;
  animation-direction: alternate, normal;
  animation-timing-function: ease-in-out, linear;
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20vh;
`;

export const StyledNavTitle = styled.h2`
  font-size: 1.4rem;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  padding: 65px 25px 10px 25px;
  text-align: center;
`;

export const StyledCloseIcon = styled(Close)`
  width: 37px;
  height: 37px;
  margin-top: 19px;
  position: absolute;
  color: #ddd;
  cursor: pointer;
`;

export const StyledLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  font-size: 1.1rem;
  text-decoration: none;
  text-transform: uppercase;
  margin-top: 20px;
  text-align: center;
  color: #fff;
`;
