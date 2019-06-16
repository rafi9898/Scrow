import React from "react";
import HomeBox from "../../AdminBox/HomeBox/HomeBox";
import { StyledWrapper } from "./styled/AdminPanelStyled";
import Navbar from "../../AdminBox/Navbar/Navbar";

const AdminHome = () => {
  return (
    <StyledWrapper>
      <Navbar />
      <HomeBox />
    </StyledWrapper>
  );
};

export default AdminHome;
