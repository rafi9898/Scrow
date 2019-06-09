import React, { Component } from "react";
import { StyledRow } from "../../Style/Grid";
import {
  StyledWrapper,
  StyledContainer,
  StyledSectionTitle,
  StyledAvatar,
  StyledNickName,
  StyledDescription
} from "./styled/CommentsStyled";
import Rating from "react-rating";
import EmptyStar from "../../../assets/empty-star.png";
import FullStar from "../../../assets/full-star.png";

class Comments extends Component {
  render() {
    return (
      <StyledWrapper>
        <StyledSectionTitle>Komentarze</StyledSectionTitle>
        <StyledContainer>
          <StyledRow>
            <StyledAvatar>RP</StyledAvatar>
          </StyledRow>

          <StyledRow>
            <StyledNickName>
              Rafi9898{" "}
              <Rating
                emptySymbol={
                  <img
                    src={EmptyStar}
                    style={{ width: "20px" }}
                    className="icon"
                  />
                }
                fullSymbol={
                  <img
                    src={FullStar}
                    style={{ width: "20px" }}
                    className="icon"
                  />
                }
                readonly={true}
                initialRating={4}
              />
            </StyledNickName>

            <StyledDescription>
              Wow naprawdę mega fajne poduszki! :D
            </StyledDescription>
          </StyledRow>
        </StyledContainer>
      </StyledWrapper>
    );
  }
}

export default Comments;
