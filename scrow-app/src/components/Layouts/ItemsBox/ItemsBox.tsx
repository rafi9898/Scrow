import React, { Component } from "react";
import {
  ItemsWrapper,
  StyledWrapper,
  StyledSearchWrapper,
  StyledSearch,
  StyledSelect,
  StyledOption
} from "./styled/ItemsStyled";
import { ConfigValue } from "../../../interfaces/ItemsBoxControls/Controls";
import axios from "axios";
import Item from "../../Item/Item";

class ItemsBox extends Component<{}, ConfigValue> {
  state = {
    searchWord: "",
    category: "",
    completedCategorys: ["Nie można było wczytać kategori"]
  };

  componentDidMount() {
    const API = "https://kategorie-scrow.free.beeceptor.com/kategorie";
    axios.get(API).then(res => {
      const comCategory = res.data;
      this.setState({ completedCategorys: comCategory.category });
    });
  }

  setSearchWord = (e: React.FormEvent<HTMLInputElement>) => {
    const word: string = e.currentTarget.value;
    this.setState({
      searchWord: word
    });
  };

  setSearchCategory = (e: React.FormEvent<HTMLSelectElement>) => {
    const category: string = e.currentTarget.value;
    this.setState({
      category
    });
  };

  render() {
    const categoryList =
      this.state.completedCategorys &&
      this.state.completedCategorys.map((category, index) => {
        return (
          <StyledOption key={index} value={category}>
            {category}
          </StyledOption>
        );
      });

    return (
      <ItemsWrapper>
        <StyledSearchWrapper>
          <StyledSearch
            onChange={this.setSearchWord}
            placeholder="Wyszukaj..."
          />
          <StyledSelect onChange={this.setSearchCategory}>
            <StyledOption value="">Wybierz kategorie</StyledOption>
            {categoryList}
          </StyledSelect>
        </StyledSearchWrapper>

        <StyledWrapper>
          <Item />
          <Item />
          <Item />
        </StyledWrapper>
      </ItemsWrapper>
    );
  }
}

export default ItemsBox;
