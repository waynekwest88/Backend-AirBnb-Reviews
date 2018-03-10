const mockData = require('./mocked_data.js');

const db = require('../index.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reviews');

db
  .saveAllReviews(mockData)
  .then((data) => {
    console.log(data);
    mongoose.disconnect();
  })
  .catch(e => {
    console.log('failed with', e);
    mongoose.disconnect();
  });
