import React, { Component } from "react";
import {
  StyledItemBox,
  StyledContainer,
  StyledImgBox,
  StyledContentBox,
  StyledItemTitle,
  StyledItemPrice,
  StyledItemDescription,
  StyledItemButton
} from "./styled/ItemStyled";

class Item extends Component {
  render() {
    return (
      <StyledItemBox>
        <StyledContainer>
          <StyledImgBox />

          <StyledContentBox>
            <StyledItemTitle>Strzyżenie włosów</StyledItemTitle>
            <StyledItemPrice>Koszt: 25zł</StyledItemPrice>
            <StyledItemDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a
              sapien a enim pharetra malesuada. Integer molestie mauris et ante
              sagittis aliquet. In ut augue nisi.
            </StyledItemDescription>
            <StyledItemButton>Zobacz</StyledItemButton>
          </StyledContentBox>
        </StyledContainer>
      </StyledItemBox>
    );
  }
}

export default Item;
