const mongoose = require("mongoose"),
  FormatDate = (mongoose.Schema.Types.FormatDate = require("mongoose-schema-formatdate"));
const db = mongoose.connection;
mongoose.connect("mongodb://localhost/reviews");

const reviewSchema = mongoose.Schema({
  // TODO: my schemas here
  id: { type: Number, unique: true },
  guest_name: String,
  accuracy: Number,
  communication: Number,
  cleaniness: Number,
  location: Number,
  checkin: Number,
  message: String,
  date: String,
  value: Number
});

const ReviewsModel = mongoose.model("Guest", reviewSchema);

/* 
  id, name, accuracy, communication, cleaniness, location, checkin, message, date
*/

const save = (obj) => {
  const review = new ReviewsModel({
    id: obj.id,
    guest_name: obj.name,
    accuracy: obj.accuracy,
    communication: obj.communication,
    cleaniness: obj.cleaniness,
    location: obj.location,
    checkin: obj.checkin,
    message: obj.message,
    value: obj.value,
    date: obj.date
  });
  review.save(error => {
    if (error) return console.log(error);
  });
}

db.on("open", () => {
  console.log("Successfully connected to mongo guest database");
});

const findReviewById = (id) => {
  return ReviewsModel.find({id: id});
};

const findAllReviews = () => {
  return ReviewsModel.find().limit(20);
}

module.exports = {
  save,
  findReviewById,
  findAllReviews
}
