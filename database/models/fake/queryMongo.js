const db = require('../index.js');
const MongoClient = require('mongodb').MongoClient;

async function query() {
  const connect = await MongoClient.connect('mongodb://localhost/27017');
  const database = connect.db('reviews');
  const collection = database.collection('guests');
  let startTime = new Date().getTime();

  collection.findOne({id:9999})
  .then((data) => {
    let endTime = new Date().getTime();
    console.log(data);
    console.log(`${endTime - startTime} MS`);
    connect.close();
  })
  .catch((e) => {
    console.error(e);
    // connect.close();
  });
  connect.close();
};

query();