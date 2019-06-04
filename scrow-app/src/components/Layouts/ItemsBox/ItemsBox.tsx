import React, { Component } from "react";
import {
  ItemsWrapper,
  StyledSearchWrapper,
  StyledSearch,
  StyledSelect,
  StyledOption
} from "./styled/ItemsStyled";
import { ConfigValue } from "../../../interfaces/ItemsBoxControls/Controls";
import axios from "axios";

class ItemsBox extends Component<{}, ConfigValue> {
  state = {
    searchWord: "",
    category: "",
    completedCategorys: null
  };

  componentDidMount() {
    const API = "https://kategorie-scrow.free.beeceptor.com/kategorie";
    axios.get(API).then(res => {
      const comCategory = res.data;
      this.setState({ completedCategorys: comCategory });
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
      this.state.completedCategorys.map(category => {
        return <StyledOption value={category}>{category}</StyledOption>;
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
            <StyledOption value="Samochody">Samochody</StyledOption>
            <StyledOption value="Zabawki">Zabawki</StyledOption>
            <StyledOption value="Gry">Gry</StyledOption>
            <StyledOption value="Uroda">Uroda</StyledOption>
            <StyledOption value="Jedzenie">Jedzenie</StyledOption>
            <StyledOption value="Odzież">Odzież</StyledOption>
            <StyledOption value="Inne">Inne</StyledOption>
          </StyledSelect>
        </StyledSearchWrapper>
      </ItemsWrapper>
    );
  }
}

export default ItemsBox;
