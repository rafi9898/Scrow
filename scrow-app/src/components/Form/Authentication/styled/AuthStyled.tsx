import styled from "styled-components";

export const StyledWrapper = styled.form`
  width: 100%;
  text-align: center;
  padding: 4% 1%;
`;

export const StyledTitle = styled.h2`
  font-size: 1.4rem;
  color: #484848;
  font-weight: 500;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 30px;
`;

export const StyledInput = styled.input`
  width: 30%;
  height: 45px;
  color: #343434;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  font-size: 1.1rem;
  margin-top: 10px;
`;

export const StyledButtonSuccess = styled.button`
  font-size: 1.1rem;
  color: #fff;
  background: #008a0e;
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

  &:hover {
    background: #04630e;
    transition: all 0.3s;
  }
`;

export const StyledButtonDanger = styled.button`
  font-size: 1.1rem;
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

  &:hover {
    background: #d84353;
    transition: all 0.3s;
  }
`;
