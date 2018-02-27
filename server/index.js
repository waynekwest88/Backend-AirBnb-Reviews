const express = require('express');
const bodyParser = require('body-parser');

let app = express();
let port = 3004;

app.use(express.static(__dirname + '/client/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/reviews/:id', (req, res) => {
  res.send('Hello World');
})

app.get('/reviews', (req, res) => {
  
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})