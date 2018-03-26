const faker = require('faker');
const db = require('../index.js');
const MongoClient = require('mongodb').MongoClient;

async function generateReviews() {
  const connect = await MongoClient.connect('mongodb://localhost/27017');
  const database = connect.db('reviews');
  const collection = database.collection('guests');
  let guests = [];
  let startTime = new Date().getTime();
  let round = 0;
 
    for (let i = 0; i <= 10000001; i++) {
      if (i % 100000 === 0) {
        await collection.insertMany(guests)
        .catch((e) => {
          console.error(e);
          // connect.close();
        });
        let currentTime = new Date().getTime();
        let seconds = (currentTime - startTime) / 1000;
        let minutes = Math.floor(seconds / 60);
        let realSeconds = seconds - (minutes * 60);

        var insertsPerSecond = 10000000 / (minutes * seconds);

        console.log(`inserted batch ${i}`);
        console.log(`Finished seeding, it took ${minutes} minutes and ${realSeconds} seconds have passed`)

        guests = [];
      } 
  
      let User = {
        id: i,
        reviews: {
          guest_name: faker.name.findName(),
          communication: faker.random.number({ min: 0, max: 5 }),
          cleaniness: faker.random.number({ min: 0, max: 5 }),
          location: faker.random.number({ min: 0, max: 5 }),
          checkin: faker.random.number({ min: 0, max: 5 }),
          accuracy: faker.random.number({ min: 0, max: 5 }),
          message: `${faker.hacker.phrase()} ${faker.hacker.phrase()} ${faker.hacker.phrase()} ${faker.hacker.phrase()}`,
          date: `${faker.date.month()} ${Math.floor(
            Math.random() * (2017 - 2013 + 1)
          ) + 2013}`,
          image: faker.image.avatar(),
          value: faker.random.number({ min: 0, max: 5 })
        }
      };
      guests.push(User);
    }
    collection.createIndex({id: 1})
    console.log(`inserted 10 million at ${insertsPerSecond}`)
    connect.close();
};

generateReviews();