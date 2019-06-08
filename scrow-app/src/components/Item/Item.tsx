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
import PaginationReact from "../Pagination/PaginationReact";

class Item extends Component<{}, StateValue> {
  state = {
    products: [
      { id: 0, nazwa: "Brak danych", opis: "Brak danych", cena: 0, imgUrl: "" }
    ],
    isLoaded: false,
    currentPage: 1,
    loadItems: 5,
    pageSize: 5
  };

  componentDidMount() {
    axios.get("https://dsadbasdas.free.beeceptor.com/kategorie").then(res => {
      const products = res.data;
      this.setState({
        products,
        isLoaded: true
      });
    });
  }

  setCurrentPage = (page: number) => {
    this.setState({
      currentPage: page
    });
  };

  render() {
    const ItemList = this.state.products && this.state.products;
    const ShowItemList = this.state.isLoaded ? (
      ItemList.slice(
        (this.state.currentPage - 1) * 5,
        this.state.currentPage * 5
      ).map(item => {
        return (
          <StyledItemBox key={item.id}>
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

    return (
      <React.Fragment>
        {ShowItemList}
        <PaginationReact
          activePage={1}
          totalItems={this.state.isLoaded ? this.state.products.length : 0}
          currentPage={this.setCurrentPage}
          pageSize={this.state.pageSize}
        />
      </React.Fragment>
    );
  }
}

export default Item;
