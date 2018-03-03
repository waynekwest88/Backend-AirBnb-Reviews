import React from 'react';
import Message from './Message';
import Score from './Score.jsx';
import HeaderBar from './HeaderBar';
import axios from 'axios';

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
    this.setState({ searchTerm: e.target.value });
  }

  componentWillMount() {
    this.retrieveMetaData();
  }

  renderBlankWhenNoMessage() {
    return (
      <div>
        <div>
          <span>
            <h1>None of our guests have mentioned “derpderp”</h1>
          </span>
        </div>
      </div>
    );
  }

  filteredMessages() {
    return this.state.reviews.filter(
      review =>
        `${review.message}`
          .toUpperCase()
          .indexOf(this.state.searchTerm.toUpperCase()) >= 0
    );
  }

  renderDependingOnLengthOfMessage() {
    const messageObj = this.state.reviews.filter(
      review =>
        `${review.message}`
          .toUpperCase()
          .indexOf(this.state.searchTerm.toUpperCase()) >= 0
    );
    if (messageObj.length > 0) {
      return messageObj.map(review => (
        <Message
          message={review.message}
          date={review.date}
          name={review.guest_name}
          avatar={review.image}
        />
      ));
    }
    return this.renderBlankWhenNoMessage();
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
            messageObj.map(review => (
              <Message
                message={review.message}
                date={review.date}
                name={review.guest_name}
                avatar={review.image}
              />
            ))
          ) : (
            <div>
              <span>
                <h1>hello world</h1>
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

/* 
goes inside div id messages
{this.state.reviews
  .filter(
    review =>
      `${review.message}`
        .toUpperCase()
        .indexOf(this.state.searchTerm.toUpperCase()) >= 0
  )
  .map(review => (
    <Message
      message={review.message}
      date={review.date}
      name={review.guest_name}
      avatar={review.image}
    />
  ))} 
  */
