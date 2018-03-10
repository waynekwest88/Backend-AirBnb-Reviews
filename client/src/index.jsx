import React from 'react';
import ReactDOM from 'react-dom';
import Review from './components/Review';
import './stylesheet/stylesheet.css';
const fake = require('../../database/models/fake/fake.js')

ReactDOM.render(<Review data={fake}/>, document.getElementById('reviews'));
