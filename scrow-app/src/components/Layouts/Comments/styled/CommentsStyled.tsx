import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 70px 0px 70px 0px;

  @media (max-width: 770px) {
    width: 80%;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const StyledSectionTitle = styled.h3`
  text-transform: uppercase;
  font-size: 1.4rem;
  color: #484848;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-align: left;
  padding: 40px 0px 40px 0px;

  @media (max-width: 770px) {
    font-size: 1.2rem;
  }

  @media (max-width: 500px) {
    text-align: center;
  }
`;

export const StyledAvatar = styled.div`
  width: 70px;
  height: 70px;
  line-height: 70px;
  border-radius: 90px 90px;
  background-color: #cecece;
  border: 0.1px solid #707070;
  color: #484848;
  letter-spacing: 0.7px;
  margin-right: 20px;

  @media (max-width: 770px) {
    width: 60px;
    height: 60px;
    line-height: 60px;
  }

  @media (max-width: 500px) {
    margin: 0 auto;
    margin-bottom: 7px;
  }
`;

export const StyledLoadingIcon = styled.img`
  width: 5%;
  margin: 0 auto;

  @media (max-width: 500px) {
    width: 16%;
  }
`;

export const StyledNickName = styled.p`
  color: #484848;
  font-weight: bold;
  letter-spacing: 0.4px;
  font-size: 1.3rem;
  text-align: left;
  margin-bottom: 10px;

  @media (max-width: 770px) {
    font-size: 1.1rem;
  }

  @media (max-width: 500px) {
    text-align: center;
  }
`;

export const StyledDescription = styled.p`
  color: #484848;
  font-size: 1.1rem;
  letter-spacing: 0.2px;
  text-align: justify;

  @media (max-width: 770px) {
    font-size: 1rem;
  }

  @media (max-width: 500px) {
    text-align: center;
  }
`;
