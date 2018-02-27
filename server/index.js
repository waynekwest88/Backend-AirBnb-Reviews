const express = require("express");
const bodyParser = require("body-parser");
const db = require("../database/models/index");
const path = require("path");
let app = express();
let port = 3004;
const filePath = path.join(__dirname, "../client/dist");

app.use(express.static(filePath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/reviews/:id", (req, res) => {
  console.log(`going to ${filePath}`)
  const id = req.params.id;
  db
    .findReviewById(id)
    .then(result => res.status(202).send(result))
    .catch(e => res.status(404).send("Failed to a single message ==> ${e}"));
});

app.get("/reviews", (req, res) => {
  db
    .findAllReviews()
    .then(results => res.status(202).send(results))
    .catch(e => console.log(`failed to retrieve from mongo ==> ${e}`));
});

app.listen(port, () => console.log(`listening on port ${port}`));
