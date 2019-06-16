import styled from "styled-components";
import { CloseO } from "styled-icons/evil/CloseO";
import { Menu } from "styled-icons/boxicons-regular/Menu";
import { Link } from "react-router-dom";
import { keyFrameSildeNavDesktop } from "../../../Navbar/styled/KeyFrames";

export const StyledWrapper = styled.div`
  width: auto;
`;

export const StyledNavbarBox = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  height: 100vh;
  width: 23vw;
  background: #484747;
  box-shadow: 0px 2px 4px #333;
  animation: ${keyFrameSildeNavDesktop} 1s ease-in-out 0s;
  animation-fill-mode: backwards, forwards;
  animation-direction: alternate, normal;
  animation-timing-function: ease-in-out, linear;
`;

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const StyledCloseIcon = styled(CloseO)`
  width: 60px;
  margin: 0 auto;
  color: #fff;
  margin-top: 20px;
  cursor: pointer;
`;

export const StyledHamburgerIcon = styled(Menu)`
  width: 65px;
  position: absolute;
  top: 13px;
  left: 13px;
  cursor: pointer;
`;

export const StyledNavTitle = styled.h2`
  font-size: 1.5rem;
  color: #fcfcfc;
  font-weight: bold;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const StyledLink = styled(Link)`
  font-size: 1.5rem;
  color: #ffffff;
  font-weight: 400;
  letter-spacing: 0.3px;
  background-color: #808080;
  text-transform: uppercase;
  width: 100%;
  padding: 15px 7px;
  margin-bottom: 15px;
  text-decoration: none;
  text-align: center;
`;

export const StyledLogoutLink = styled(Link)`
  font-size: 1.5rem;
  color: #ffffff;
  font-weight: bold;
  letter-spacing: 0.3px;
  background-color: #ff6a6a;
  width: 100%;
  padding: 15px 7px;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  position: absolute;
  bottom: 0;
  left: 0;
`;
