import React from "react";
import {
  StyledWrapper,
  StyledContainer,
  StyledLogo,
  StyledSectionTitle,
  StyledPlanetImg
} from "./styled/PageInstaller";
import planetLogo from "../../../assets/planet-logo.png";
import InstallerControls from "../../InstallerControls/InstallerControls";

const Installer = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledLogo>SCROW</StyledLogo>
        <StyledSectionTitle>INSTALATOR</StyledSectionTitle>
        <StyledPlanetImg src={planetLogo} alt="planet-image" />
        <InstallerControls />
      </StyledContainer>
    </StyledWrapper>
  );
};

export default Installer;
