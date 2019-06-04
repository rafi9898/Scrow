import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavs = styled.div`
  width: 100vw;
  height: auto;
  background: #4e4e4e;
  border: 1px solid #707070;
  display: flex;
  justify-content: center;
  padding: 30px;
`;

export const StyledWrapper = styled.div`
  text-align: center;
  width: 100%;
`;

export const StyledNavsLink = styled(Link)`
  color: #ffffff;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.2rem;
  margin-right: 20px;
  letter-spacing: 0.6px;
  transition: all 0.3s;
  text-align: center;

  &:hover {
    transition: all 0.3s;
    color: #ddd;
  }
`;
