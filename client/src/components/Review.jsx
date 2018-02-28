import React from "react";
import Message from "./Message";
import Score from "./Score.jsx";
import TotalReview from "./TotalReview";
import axios from "axios";
const includes = require("lodash.includes");
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
      totalReviews: 0
    };
  }

  async retrieveMetaData() {
    const retrieved = await axios.get("/reviews");
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

  renderSearchTerm() {
    // TODO: using the term, and filter out the correct messages
    this.state.reviews.filter(data => {
      console.log('trying real hard', data.message);
    });
    // console.log(`returning this obj ==> ${filteredObj}`);
  }

  componentWillMount() {
    this.retrieveMetaData();
  }

  render() {
    const style = {
      scoreCard: {
        marginLeft: "-8px",
        marginRight: "-8px"
      }
    };
    return (
      <div>
        <div>
          <TotalReview totalReviews={this.state.totalReviews} />
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
          {this.state.reviews.map(review => (
            <Message
              message={review.message}
              date={review.date}
              name={review.guest_name}
              avatar={review.image}
            />
          ))}
        </div>
      </div>
    );
  }
}
