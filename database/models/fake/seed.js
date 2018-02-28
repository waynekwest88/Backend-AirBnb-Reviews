const data = require('./fakedata.js')
const db = require("../index.js");

// const faked = data.fakeData();
// faked.forEach(item => db.save(item));

const seed = async () => {
  const faked = await data.fakeData();
  faked.forEach(item => db.save(item));
}

seed();