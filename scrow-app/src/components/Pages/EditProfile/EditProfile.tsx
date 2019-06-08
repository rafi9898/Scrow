import React from "react";
import { StyledWrapper } from "./styled/EditProfileStyled";
import Header from "../../Header/Header";
import Navs from "../../Navs/Navs";
import EditProfileBox from "../../ProfilBox/EditProfile/EditProfileBox";
import Footer from "../../Footer/Footer";

const EditProfile = () => {
  return (
    <StyledWrapper>
      <Header />
      <Navs />
      <EditProfileBox />
      <Footer />
    </StyledWrapper>
  );
};

export default EditProfile;
