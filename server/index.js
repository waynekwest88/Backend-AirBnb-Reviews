require('newrelic');
const express = require('express');
const redis = require("redis");
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/models/index.js');

const app = express();
const port = 3004;
const filePath = path.join(__dirname, '../client/dist');
const client = redis.createClient(6379);

const cache = (req, res, next) => {
  const id = req.params.id;
  client.get(id, (err, data) => {
    if (err) { throw err; }
    if (data !== null) {
      const result = JSON.parse(data);
      res.send(result);
    } else {
      next();
    }
  });
};

app.use(bodyParser.json());
app.use('/reviews/:id', express.static(filePath));


app.get('/reviews/:id/reviews', cache, async (req, res) => {
  const { id } = req.params;
  try {
    const data = await db.findReviewById(id);
    client.setex(req.params.id, 300, JSON.stringify(data));
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.listen(port, () => console.log(`listening on port ${port}`));
