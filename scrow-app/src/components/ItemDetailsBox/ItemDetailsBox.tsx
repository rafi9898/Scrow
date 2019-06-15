import React, { Component } from "react";
import {
  StyledWrapper,
  StyledContainer,
  StyledItemTitle,
  StyledItemPrice,
  StyledItemDescription,
  SubTitleCount,
  StyledCounter,
  StyledIconCard,
  StyledItemButton,
  StyledRow,
  StyledRowImage
} from "./styled/DetailsStyled";
import ImageGallery from "react-image-gallery";
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import Comments from "../Layouts/Comments/Comments";

class ItemDetailsBox extends Component {
  render() {
    const images = [
      {
        original:
          "https://www.fan.com.pl/userdata/gfx/56728/Morrison-M3002BS---gitara-akustyczna.jpg"
      },
      {
        original:
          "https://www.fan.com.pl/environment/cache/images/500_500_productGfx_56733/Jackson-JS1X-Dinky-Minion-AH-FB-NPK---gitara-elektryczna.jpg"
      },
      {
        original:
          "https://thumbs.img-sprzedajemy.pl/1000x901c/9a/e3/e6/gitara-elektryczna-cg-winner-matsumoku-made-in-warszawa-483373108.jpg"
      }
    ];

    return (
      <StyledWrapper>
        <StyledContainer>
          <StyledRowImage>
            <ImageGallery showThumbnails={false} items={images} />
          </StyledRowImage>

          <StyledRow>
            <StyledItemTitle>Strzyżenie włosów</StyledItemTitle>
            <StyledItemPrice>Koszt: 25zł</StyledItemPrice>
            <StyledItemDescription>
              Strzyżenie włosów, najlepsza i najczęściej wybierana usługa przez
              naszych klientów. Ma już ponad 70 recenzji na facebooku.
            </StyledItemDescription>

            <SubTitleCount>Liczba sztuk: </SubTitleCount>
            <StyledCounter value="1" type="number" min={1} max={10} />
            <StyledItemButton>
              <StyledIconCard /> KUPUJĘ
            </StyledItemButton>
          </StyledRow>
        </StyledContainer>
        <Comments />
      </StyledWrapper>
    );
  }
}

export default ItemDetailsBox;
