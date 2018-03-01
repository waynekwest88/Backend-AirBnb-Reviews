import React from 'react';
import styled from 'styled-components';
const ReviewDiv = styled.div`
  color: purple;
  display: inline-block;
  width: 100%;
  float: left;
  font-family: 'Times New Roman';
  font-size: 25px;
`;
export default class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    return (
      <ReviewDiv id="staticReviewDiv">
        <h6>Total Reviews: {this.props.totalReviews}</h6>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>
          <input
            onChange={e => this.props.handleSearch(e)}
            type="text"
            placeholder="Search Reviews"
          />
        </span>
      </ReviewDiv>
    );
  }
}
