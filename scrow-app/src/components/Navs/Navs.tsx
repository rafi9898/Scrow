import React, { useState } from "react";
import SignInLinks from "./SignInLinks";
import SignOutLinks from "./SignOutLinks";
import { StyledNavs } from "./styled/NavsStyled";

const Navs = () => {
  const [isSignIn] = useState(false);
  const currentLinks = !isSignIn ? <SignInLinks /> : <SignOutLinks />;

  return <StyledNavs>{currentLinks}</StyledNavs>;
};

export default Navs;
