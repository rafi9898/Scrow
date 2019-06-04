import React from "react";
import { StyledWrapper } from "./styled/HomeStyled";
import Header from "../../Header/Header";
import Navs from "../../Navs/Navs";
import ItemsBox from "../../Layouts/ItemsBox/ItemsBox";

const Home = () => {
  return (
    <StyledWrapper>
      <Header />
      <Navs />
      <ItemsBox />
    </StyledWrapper>
  );
};

export default Home;
