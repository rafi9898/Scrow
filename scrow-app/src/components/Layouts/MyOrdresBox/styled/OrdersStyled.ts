import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  padding: 60px 40px;
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const StyledSectionTitle = styled.h2`
  font-weight: 400;
  color: #484848;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 30px;
  text-transform: uppercase;
`;

export const StyledOrdersBox = styled.div`
  width: 40%;
  margin: 0 auto;
`;

export const StyledOrderItem = styled.div`
  box-shadow: 0px 0px 1px #333;
  width: 100%;
  text-align: center;
  padding: 20px 40px;
  background: ${(props: Props) => (props.sended ? "#FFFFC1" : "#8fdc8c")};
  margin-bottom: 20px;
`;

export const StyledOrderTitle = styled.h4`
  font-weight: bold;
  color: #292929;
  text-transform: uppercase;
  letter-spacing: 0.7px;
  font-size: 1.1rem;
`;

export const StyledOrderLabel = styled.p`
  font-weight: 400;
  color: #292929;
  letter-spacing: 0.6px;
  font-size: 1.1rem;
  margin-top: 2px;
`;

interface Props {
  sended?: true;
}
