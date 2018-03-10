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
    let id = this.props.id || parseInt(window.location.pathname.split('/')[2], 10);
    const retrieved = await axios.get(`http://localhost:3004/reviews/${id}/reviews`);
    console.log(retrieved.data);
    await this.setState(
      {
        reviews: retrieved.data.reviews,
        totalReviews: retrieved.data.reviews.length,
        accuracy:
          retrieved.data.reviews.accuracy,
        communication:
          retrieved.data.reviews.communication,
        checkin:
          retrieved.data.reviews.checkin,
        value:
          retrieved.data.reviews.value,
        cleaniness:
          retrieved.data.reviews.cleaniness,
        location:
          retrieved.data.reviews.location
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
    console.log('aslkfjkladsjf')
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

            <BlankSearch search={this.searchReviews} />
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

            <BlankSearch search={this.searchReviews} />
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
