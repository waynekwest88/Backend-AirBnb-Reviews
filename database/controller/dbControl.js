const db = require("../models/index.js");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/reviews");

const findReviewById = reviewId => {
  db.findReviewById(reviewId, (err, singleReview) => {
    if (err) {
      console.log(`failed to fetch data`);
    }
    return singleReview;
  });
};

const findAllReviews = () => {
  db.findAllReviews((err, allReviews) => {
    if (err) {
      console.log(`connecting to db failed`);
    }
    return allReviews;
  })
}

module.exports.findReviewById = findReviewById;
module.exports.findAllReviews = findAllReviews;