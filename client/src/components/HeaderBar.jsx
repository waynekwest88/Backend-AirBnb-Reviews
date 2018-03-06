import React from 'react';
import styled from 'styled-components';
import ReactStars from 'react-stars';

export default class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="staticReviewDiv">
        <div id="ReviewCount">{this.props.totalReviews} Reviews</div>
        <div>
          <ReactStars
            count={5}
            edit={false}
            half
            value={5}
            size={24}
            color1="#D8D8D8"
            color2="#2cb5b4"
          />
        </div>
      </div>
    );
  }
}
