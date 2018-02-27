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
  date: String
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
    date: obj.date
  });
  review.save(error => {
    if (error) return console.log(error);
  });
}
const loadById = id => ReviewsModel.find({ id: id }).exec();
const loadAll = id => ReviewsModel.find().exec();

db.on("open", () => {
  console.log("Successfully connected to mongo guest database");
});

module.exports.save = save;
module.exports.loadAll = loadAll;
module.exports.loadById = loadById;
