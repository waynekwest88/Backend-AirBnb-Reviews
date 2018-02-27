const mongoose = require('mongoose'),
      FormatDate = mongoose.Schema.Types.FormatDate = require('mongoose-schema-formatdate');
const db = mongoose.connection;
mongoose.connect('mongodb://localhost/reviews');

const reviewSchema = mongoose.Schema({
  // TODO: my schemas here
  id: {type: Number, unique: true},
  guest_name: String,
  accuracy: Number,
  communication: Number,
  cleaniness: Number,
  location: Number,
  checkin: Number,
  message: String,
  date: {type: FormatDate, format: 'MM-DD', default: Date.now}
})

const Reviews = mongoose.model('Guest', guestSchema);

function save(obj) {
 const review = new Reviews({
   id: obj.id,
   guest_name: obj.name,
   accuracy: obj.accuracy,
   communication: obj.communication,
   cleaniness: obj.cleaniness,
   location: obj.location,
   checkin: obj.checkin,
   message: obj.message,
   date: obj.date
 })
 review.save((error) => {
   if (error) return console.log(error);
 })
}

function load(id, cb) {
  // TODO when loading from the database
  Reviews.find({id: id}, (err, item) => {
    if (err) console.log('having trouble finding the id in database');

    cb(item);
  })
}

db.on('open', () => {
  console.log('Successfully connected to mongo guest database');
})

module.exports.db = db;
