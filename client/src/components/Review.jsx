import React from "react";
import Message from './Message';
import Score from './Score.jsx';
import TotalReview from './TotalReview';
import axios from "axios";

export default class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      score:   []
    };
  }

  async getSingleMessage() {
    const retrieved = await axios.get('/reviews');
    await this.setState({reviews: retrieved.data})

    console.log(this.state.reviews);
  }

  componentWillMount() {
    this.getSingleMessage();
  }

  render() {
    // const fakeShip = faked.ship;
    return (
      <div style={{ textAlign: "center" }}>
        <div>
          <TotalReview />
          </div>

        <div>
        {this.state.reviews.map(review =>
          <Message message={review.message}/>
        )}
        </div>
      </div>
    );
  }
}
