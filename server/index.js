const express = require("express");
const bodyParser = require("body-parser");
import { findAllReviews } from "../database/controller/dbControl";
import { findReviewById } from "../database/controller/dbControl";

let app = express();
let port = 3004;

app.use(express.static(__dirname + "/client/"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/reviews/:id", (req, res) => {
  const id = req.param;
  findReviewById(id)
    .then(result => res.status(202).json(result));
});

app.get("/reviews", (req, res) => {
  findAllReviews()
    .then(results => res.status(202).json(results));
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
