import React, { Component } from "react";
import { StyledRow } from "../../Style/Grid";
import {
  StyledWrapper,
  StyledContainer,
  StyledSectionTitle,
  StyledAvatar,
  StyledNickName,
  StyledLoadingIcon,
  StyledDescription
} from "./styled/CommentsStyled";
import Rating from "react-rating";
import EmptyStar from "../../../assets/empty-star.png";
import FullStar from "../../../assets/full-star.png";
import { StateValue } from "../../../interfaces/Comments/CommentsDate";
import LoadingIcon from "../../../assets/loading-spinner.svg";
import axios from "axios";
import Pagination from "../../Pagination/PaginationReact";

class Comments extends Component<{}, StateValue> {
  state = {
    comments: [
      {
        id: 1,
        rate: 3,
        nick: "Tomek Walczyk",
        initials: "TW",
        description: "no tak średnio bym powiedziałm tak średnio!"
      }
    ],
    isLoaded: false,
    currentPage: 1,
    loadItems: 2,
    pageSize: 2
  };

  componentDidMount() {
    axios.get("https://komentarzemoje-tak.free.beeceptor.com").then(res => {
      this.setState({
        comments: res.data,
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
    const currentComments = this.state.comments && this.state.comments;
    const commentsList = this.state.isLoaded ? (
      currentComments
        .slice(
          (this.state.currentPage - 1) * this.state.loadItems,
          this.state.currentPage * this.state.loadItems
        )
        .map(comment => {
          return (
            <StyledContainer key={comment.id}>
              <StyledRow>
                <StyledAvatar>{comment.initials}</StyledAvatar>
              </StyledRow>

              <StyledRow>
                <StyledNickName>
                  {comment.nick}{" "}
                  <Rating
                    emptySymbol={
                      <img
                        src={EmptyStar}
                        style={{ width: "20px" }}
                        className="icon"
                        alt="emptystar"
                      />
                    }
                    fullSymbol={
                      <img
                        src={FullStar}
                        style={{ width: "20px" }}
                        className="icon"
                        alt="fullstar"
                      />
                    }
                    readonly={true}
                    initialRating={comment.rate}
                  />
                </StyledNickName>

                <StyledDescription>{comment.description}</StyledDescription>
              </StyledRow>
            </StyledContainer>
          );
        })
    ) : (
      <StyledLoadingIcon src={LoadingIcon} />
    );

    return (
      <StyledWrapper>
        <StyledSectionTitle>Komentarze</StyledSectionTitle>
        {commentsList}
        <Pagination
          totalItems={this.state.isLoaded ? currentComments.length : 0}
          currentPage={this.setCurrentPage}
          pageSize={this.state.pageSize}
        />
      </StyledWrapper>
    );
  }
}

export default Comments;
