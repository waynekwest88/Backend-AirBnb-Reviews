const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

let app = express();
let port = 3004;

app.use(express.static())