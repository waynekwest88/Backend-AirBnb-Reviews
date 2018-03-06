import React from 'react';
import Navigation from './Navigation';
import IndividualReview from './IndividualReview';

export default class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      reviews: this.props.reviews,
      displayedReviews: this.props.reviews.slice(0, 7)
    };
    this.updateCurrentPage = this.updateCurrentPage.bind(this);
  }

  updateCurrentPage(newPage) {
    this.setState({ currentPage: newPage }, () => {
      this.updateDisplayedReview();
    });
  }

  updateDisplayedReview() {
    const startIndex = (this.state.currentPage - 1) * 7;
    const endIndex = startIndex + 7;
    this.setState({
      displayedReviews: this.state.reviews.slice(startIndex, endIndex)
    });
  }

  render() {
    return (
      <div id="review">
        {this.state.displayedReviews.map(review => (
          <IndividualReview review={review} key={review.id} />
      ))}
        <Navigation
          pages={Math.ceil(this.state.reviews.length / 7)}
          clickHandler={this.updateCurrentPage}
        />
      </div>

    );
  }
}
