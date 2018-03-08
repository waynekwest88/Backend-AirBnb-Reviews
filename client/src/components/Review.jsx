import React from 'react';
import ReviewList from './ReviewList';
import Score from './Score.jsx';
import HeaderBar from './HeaderBar';
import BlankSearch from './BlankSearch.jsx';
import SearchPage from './SearchPage';
import axios from 'axios';
import $ from 'jquery';

export default class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: null,
      searchResultsArray: null,
      accuracy: 0,
      communication: 0,
      checkin: 0,
      value: 0,
      cleaniness: 0,
      location: 0,
      totalReviews: 0,
      hasSearched: false,
      searchTerm: null
    };
    this.clearSearch = this.clearSearch.bind(this);
    this.searchReviews = this.searchReviews.bind(this);
  }

  async retrieveMetaData() {
    const retrieved = await axios.get('http://localhost:3004/reviews');
    await this.setState(
      {
        reviews: retrieved.data,
        totalReviews: retrieved.data.length,
        accuracy:
          retrieved.data.reduce((a, b) => a + b.accuracy, 0) /
          retrieved.data.length,
        communication:
          retrieved.data.reduce((a, b) => a + b.communication, 0) /
          retrieved.data.length,
        checkin:
          retrieved.data.reduce((a, b) => a + b.checkin, 0) /
          retrieved.data.length,
        value:
          retrieved.data.reduce((a, b) => a + b.value, 0) /
          retrieved.data.length,
        cleaniness:
          retrieved.data.reduce((a, b) => a + b.cleaniness, 0) /
          retrieved.data.length,
        location:
          retrieved.data.reduce((a, b) => a + b.location, 0) /
          retrieved.data.length
      },
      () =>
        console.log(
          `current objects ahve this ==> ${this.state.reviews.length}`
        )
    );
  }

  clearSearch() {
    this.setState({ searchResultsArray: null, searchTerm: null });
    $(':input').val('');
  }

  componentDidMount() {
    this.retrieveMetaData();
  }

  searchReviews(queryString) {
    this.setState({ searchTerm: queryString });
    const reviewArr = [];
    this.state.reviews.filter(review => {
      if (review.message.toLowerCase().includes(queryString.toLowerCase())) {
        reviewArr.push(review);
      }
    });
    this.setState({ searchResultsArray: reviewArr });
  }

  render() {
    if (this.state.searchResultsArray && this.state.searchTerm) {
      return (
        <div className="searchreviews">
          <div className="header-toplevel">
            <HeaderBar totalReviews={this.state.totalReviews} />

            <div>
              <BlankSearch search={this.searchReviews} />
            </div>
          </div>
          <div className="searching">
            <SearchPage
              clearSearch={this.clearSearch}
              queryString={this.state.searchTerm}
              numberOfResults={this.state.searchResultsArray.length}
            />
          </div>

          <ReviewList reviews={this.state.searchResultsArray} />
        </div>
      );
    } else if (this.state.reviews) {
      return (
        <div className="reviews">
          <div className="header-toplevel">
            <HeaderBar totalReviews={this.state.totalReviews} />

            <div>
              <BlankSearch search={this.searchReviews} />
            </div>
          </div>
          <div className="scorecard">
            <Score
              accuracy={this.state.accuracy}
              communication={this.state.communication}
              value={this.state.value}
              location={this.state.location}
              cleaniness={this.state.cleaniness}
              checkin={this.state.checkin}
            />
            </div>

          <div id="messages">
            <div>
              <ReviewList reviews={this.state.reviews} />
            </div>
          </div>
        </div>
      );
    }
    return <div>Loading....</div>;
  }
}
