import React from "react";
import { StyledWrapper } from "./styled/ProfileStyled";
import Header from "../../Header/Header";
import Navs from "../../Navs/Navs";
import ProfileBox from "../../ProfilBox/ProfilBox";
import Footer from "../../Footer/Footer";

const Profile = () => {
  return (
    <StyledWrapper>
      <Header />
      <Navs />
      <ProfileBox />
      <Footer />
    </StyledWrapper>
  );
};

export default Profile;
