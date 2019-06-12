import styled from "styled-components";

export const ItemsWrapper = styled.div`
  width: 100%;
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 25px 10px;
`;

export const StyledSearchWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 30px;

  @media (max-width: 940px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const StyledSearch = styled.input`
  width: 60%;
  height: 45px;
  color: #5d5d5d;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.6px;
  margin-right: 20px;
  outline-color: #069719;
  padding-left: 10px;

  @media (max-width: 940px) {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 6px;
  }
`;

export const StyledSelect = styled.select`
  width: 40%;
  height: 45px;
  text-align: center;
  text-transform: uppercase;
  font-size: 1rem;
  color: #535353;
  outline-color: #069719;

  @media (max-width: 940px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const StyledOption = styled.option`
  color: #535353;
  width: 100%;
  letter-spacing: 0.6px;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
`;
