const data = require("./fake/fakedata.js");
const db = require("../index.js");

db.save(data.fakeData);