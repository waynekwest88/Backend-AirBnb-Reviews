const data = require("./fake/fakedata.js");
const db = require("../index.js");

const faked = data.fakeData();
faked.forEach(item => db.save(item));