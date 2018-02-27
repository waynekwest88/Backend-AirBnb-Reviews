import React from "react";
import Message from './Message.jsx';
// import Score from './Score.jsx';
import axios from "axios";

export default class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
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
        {this.state.reviews.map(review =>
          <Message message={review.message}/>
        )}
      </div>
    );
  }
}
