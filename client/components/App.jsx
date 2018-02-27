import React from 'react';
// import Message from './Message.jsx';
// import Score from './Score.jsx';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
    }
  }

  getSingleMessage() {
    axios.get('/reviews')
      .then(data => console.log(`fetching from server ==> ${data}`))
      .catch(error => console.log(`4000000044`))
  }
  
  componentWillMount() {
    this.getSingleMessage();
  }

  render() {
    // const fakeShip = faked.ship;
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Fake Review</h1>
        </div>
    )
  }
}

// const faked = require('../../db/models/fakedata.JSON');