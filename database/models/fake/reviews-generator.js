const faker = require('faker');
const fs = require('fs');

const generateReviews = (y) => {
  const guests = [];
  const time = new Date().getTime();

  for (let i = y; i < y + 1000; i++) {
    let User = {
      id: i,
      reviews: {
        guest_name: generateNames(),
        communication: faker.random.number({ min: 0, max: 5 }),
        cleaniness: faker.random.number({ min: 0, max: 5 }),
        location: faker.random.number({ min: 0, max: 5 }),
        checkin: faker.random.number({ min: 0, max: 5 }),
        accuracy: faker.random.number({ min: 0, max: 5 }),
        message: generateMessages(),
        date: generateDates(),
        image: generateImages(),
        value: faker.random.number({ min: 0, max: 5 })
      }
    };
    guests.push(User);
    // if (i % 10000 === 0) {
    //   const newTime = new Date().getTime();
    //   console.log(newTime - time);
    // }
  }
  return guests;
};

const generateNames = () => {
  let names = [];
  for (let i = 0; i < 1; i++) {
    names.push(`${faker.name.findName()}`);
  }
  return names;
};

const generateDates = () => {
  let dates = [];
  for (let i = 0; i < 1; i++) {
    dates.push(`${faker.date.month()} ${Math.floor(
      Math.random() * (2017 - 2013 + 1)
    ) + 2013}`);
  }
  return dates;
};

const generateImages = () => {
  let images = [];
  for (let i = 0; i < 1; i++) {
    images.push(faker.image.avatar()); 
  }
  return images;
};

const generateMessages = () => {
  let messages = [];
  for (let i = 0; i < 1; i++) {
    let message = `${faker.hacker.phrase()} ${faker.hacker.phrase()} ${faker.hacker.phrase()} ${faker.hacker.phrase()}`;
    messages.push(message);
  }
  return messages;
};

module.exports.generateReviews = generateReviews;