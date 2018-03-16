const faker = require('faker');
const fs = require('fs');
const db = require('../index.js');
const MongoClient = require('mongodb').MongoClient;

async function generateReviews() {
  const connect = await MongoClient.connect('mongodb://localhost/27017');
  const database = connect.db('reviews');
  const collection = database.collection('guests');
  let guests = [];
 
    for (let i = 1; i <= 10000001; i++) {
      if (i % 100000 === 0) {
        await collection.insertMany(guests)
        .catch((e) => {
          console.error(e);
          // connect.close();
        });
        console.log(i);
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
    connect.close();
};

generateReviews();