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
import { StateValue } from "../../interfaces/Item/ItemControls";
import axios from "axios";

class Item extends Component<{}, StateValue> {
  state = {
    products: [
      { id: 0, nazwa: "Brak danych", opis: "Brak danych", cena: 0, imgUrl: "" }
    ],
    isLoaded: false
  };

  componentDidMount() {
    axios.get("https://scrow-app.free.beeceptor.com/produkty").then(res => {
      const products = res.data;
      this.setState({
        products,
        isLoaded: true
      });
    });
  }

  render() {
    const ItemList = this.state.products && this.state.products;
    const ShowItemList = this.state.isLoaded ? (
      ItemList.map(item => {
        return (
          <StyledItemBox>
            <StyledContainer>
              <StyledImgBox src={item.imgUrl} alt="item img" />

              <StyledContentBox>
                <StyledItemTitle>{item.nazwa}</StyledItemTitle>
                <StyledItemPrice>Cena: {item.cena} zł</StyledItemPrice>
                <StyledItemDescription>{item.opis}</StyledItemDescription>
                <StyledItemButton>Zobacz</StyledItemButton>
              </StyledContentBox>
            </StyledContainer>
          </StyledItemBox>
        );
      })
    ) : (
      <p>Brak danych do wczytania!</p>
    );

    return <React.Fragment>{ShowItemList}</React.Fragment>;
  }
}

export default Item;
