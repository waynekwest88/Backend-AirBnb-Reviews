const db = require('../index.js');
const MongoClient = require('mongodb').MongoClient;

async function query(amountOfQueries) {
  const connect = await MongoClient.connect('mongodb://localhost/27017');
  const database = connect.db('reviews');
  const collection = database.collection('guests');
  const randomizeNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let totalTime = 0;

  for (var i = 0; i < amountOfQueries; i++) {
    let startTime = new Date().getTime();
    let number = randomizeNumber(0, 9999979)
    await collection.findOne({id: number})
    let endTime = new Date().getTime();
    let time = endTime - startTime;
    totalTime += time;
    console.log(`QUERY TIME for ${number}: ${time}ms`);
  }

  let avgTime = totalTime / amountOfQueries;
  console.log(`FINAL AVG QUERY TIME: ${avgTime}ms`);
  connect.close();
};

query(1000);