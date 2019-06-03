import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavbar = styled.nav`
  width: 100vw;
  height: 45px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
`;

export const StyledNavbarTitle = styled.h1`
  font-size: 1.2rem;
  color: #484848;
  font-weight: 500;
`;

export const StyledList = styled.ul`
  display: flex;
  list-style-type: none;
`;

export const StyledListElement = styled.li`
  margin-top: 6px;
  margin-right: 20px;
`;

const slideBorder = keyframes`
0% {
  border-width: 0%;
  border-bottom: 1px solid #ffd02f;
}

100% {
  border-width: 100%;
  border-bottom: 1px solid #ffd02f;
}
`;

export const StyledHref = styled(Link)`
  font-size: 0.9rem;
  color: #636363;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    transition: all 0.3s;
    animation: ${slideBorder} 0.3s 0s both;
  }
`;
