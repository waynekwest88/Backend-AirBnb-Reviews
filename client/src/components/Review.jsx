import React from 'react';
import Message from './Message';
import Score from './Score.jsx';
import HeaderBar from './HeaderBar';
import BlankSearch from './BlankSearch.jsx';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import $ from 'jquery';

export default class Review extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      accuracy: 0,
      communication: 0,
      checkin: 0,
      value: 0,
      cleaniness: 0,
      location: 0,
      totalReviews: 0,
      hasSearched: false,
      searchTerm: ''
    };
    // this.renderSearchTerm.bind(this);
    // this.clearSearch.bind(this);
    /* 
      Bind is costly on rendering, how to make this work
    */
  }

  async retrieveMetaData() {
    const retrieved = await axios.get('/reviews');
    await this.setState({
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
        retrieved.data.reduce((a, b) => a + b.value, 0) / retrieved.data.length,
      cleaniness:
        retrieved.data.reduce((a, b) => a + b.cleaniness, 0) /
        retrieved.data.length,
      location:
        retrieved.data.reduce((a, b) => a + b.location, 0) /
        retrieved.data.length
    });
  }

  renderSearchTerm(e) {
    // TODO: using the term, and filter out the correct messages
    // const search = $('#searchbar')
    console.log(`search is this ==> ${e.target}`);
    this.setState({ searchTerm: e.target.value });
  }

  clearSearch() {
    this.setState({ searchTerm: '' }, () => {
      // $('#searchbar').val('');
      $('searchbar').val('');
    });
  }

  componentWillMount() {
    this.retrieveMetaData();
  }

  filteredMessages() {
    return this.state.reviews.filter(
      review =>
        `${review.message}`
          .toUpperCase()
          .indexOf(this.state.searchTerm.toUpperCase()) >= 0
    );
  }

  render() {
    const style = {
      scoreCard: {
        marginLeft: '-8px',
        marginRight: '-8px'
      }
    };
    const messageObj = this.filteredMessages();
    return (
      <div>
        <div>
          <input
            onChange={e => this.renderSearchTerm(e)}
            type="text"
            placeholder="Search Reviews"
          />
        </div>

        <div className="scorecard" style={style.scoreCard}>
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
          {messageObj.length > 0 ? (
            <Message msgObj={messageObj} />
          ) : (
            <BlankSearch
              searchTerm={this.state.searchTerm}
              clearSearch={this.clearSearch.bind(this)}
            />
          )}
        </div>
      </div>
    );
  }
}

{
  /* messageObj.map(review => (
              <Message
                message={review.message}
                date={review.date}
                name={review.guest_name}
                avatar={review.image}
              />
            ))
          ) */
}
