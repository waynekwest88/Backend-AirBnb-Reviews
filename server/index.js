const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('../database/models/index');
const path = require('path');
const cors = require('cors');

let app = express();
let port = 3004;
const filePath = path.join(__dirname, '../client/dist');

mongoose.connect('mongodb://localhost/reviews');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/reviews/:id', express.static(filePath));

app.get('/reviews/:id/reviews', (req, res) => {
  const { id } = req.params;
  db
    .findReviewById(id)
    .then(results => {
      console.log(results);
      res.status(202).send(results);
    })
    .catch(e => console.log(`failed to retrieve from mongo ==> ${e}`));
});

app.get('/reviews', (req, res) => {
  db
    .findAllReviews()
    .then(results => {
      res.status(202).send(results);
    })
    .catch(e => console.log(`failed to retrieve from mongo ==> ${e}`));
});

app.listen(port, () => console.log(`listening on port ${port}`));
