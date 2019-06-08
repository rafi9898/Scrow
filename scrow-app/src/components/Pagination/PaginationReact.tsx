import React, { Component } from "react";
import "rc-pagination/assets/index.css";
import Pagination from "rc-pagination";
import { StyledWrapper } from "./styled/PaginationStyled";

class PaginationReact extends Component<any, any> {
  render() {
    const { activePage, totalItems, currentPage, pageSize }: any = this.props;
    return (
      <StyledWrapper>
        <Pagination
          onChange={currentPage}
          defaultCurrent={activePage}
          total={totalItems}
          pageSize={pageSize}
        />
      </StyledWrapper>
    );
  }
}

export default PaginationReact;
