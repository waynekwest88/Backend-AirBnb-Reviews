const mongoose = require('mongoose');
const { ReviewsModel } = require('../index.js');
mongoose.connect('mongodb://localhost/reviews');

const dropDB = () => {
  ReviewsModel.remove({}, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Collection removed');
      process.exit();
    }
  });
};
dropDB();

exports.dropDB = dropDB;