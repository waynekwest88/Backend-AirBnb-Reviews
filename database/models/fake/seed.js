const data = require('./fake.js');
const db = require('../index.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reviews');

db
  .saveAllReviews(data)
  .then(() => {
    console.log('Saved!');
    mongoose.disconnect();
  })
  .catch(e => {
    console.log('failed with', e);
    mongoose.disconnect();
  });
