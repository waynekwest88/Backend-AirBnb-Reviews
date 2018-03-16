const mongoose = require('mongoose');
const FormatDate = (mongoose.Schema.Types.FormatDate = require('mongoose-schema-formatdate'));
// const db = mongoose.connection;
// mongoose.connect("mongodb://localhost/reviews");

const reviewSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  reviews:
    {
      guest_name: String,
      communication: Number,
      cleaniness: Number,
      location: Number,
      checkin: Number,
      value: Number,
      accuracy: Number,
      message: String,
      date: String,
      image: String,
    }

});

const ReviewsModel = mongoose.model('Guest', reviewSchema);

const saveAllReviews = reviews => {
  return ReviewsModel.insertMany(reviews);
};

const findReviewById = id => {
  return ReviewsModel.findOne({ id });
};

const findAllReviews = () => {
  return ReviewsModel.find();
};

module.exports = {
  saveAllReviews,
  findReviewById,
  findAllReviews,
  ReviewsModel
};