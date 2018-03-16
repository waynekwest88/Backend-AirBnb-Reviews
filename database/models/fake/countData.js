const mongoose = require('mongoose');
const { ReviewsModel } = require('../index.js');
mongoose.connect('mongodb://localhost/reviews');

const count = () => {
  ReviewsModel.count({}, (err, c) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Count' + c);
      // process.exit();
    }
  });
};
count();

exports.count = count;