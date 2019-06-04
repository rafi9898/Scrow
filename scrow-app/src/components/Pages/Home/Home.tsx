import React from "react";
import { StyledWrapper } from "./styled/HomeStyled";
import Header from "../../Header/Header";
import Navs from "../../Navs/Navs";

const Home = () => {
  return (
    <StyledWrapper>
      <Header />
      <Navs />
    </StyledWrapper>
  );
};

export default Home;
