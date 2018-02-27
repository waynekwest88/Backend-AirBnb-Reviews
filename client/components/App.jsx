import React from 'react';
import Message from './Message.jsx';
import Score from './Score.jsx';
const axios = require('axios');

export default class App extends React.Component {

  componentWillMount() {
    axios.get('/reviews/')
  }

  render() {
    const fakeShip = faked.ship;
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Fake Review</h1>
        {/* <h5>{fakeShip.guest.guest_name}</h5>
        <h5>Accuracy: {fakeShip.guest.review.accuracy}</h5>
        <h5>Communication: {fakeShip.guest.review.communication}</h5>
        <h5>Cleaniss: {fakeShip.guest.review.cleaniness}</h5>
        <h5>Location: {fakeShip.guest.review.location}</h5>
        <h5>Check In: {fakeShip.guest.review['check-in']}</h5>
        <h5>Value: {fakeShip.guest.review.value}</h5> */}
        {/* <Message message={fakeShip.guest.review.message}/> */}
        </div>
    )
  }
}

// const faked = require('../../db/models/fakedata.JSON');