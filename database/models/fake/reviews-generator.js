const faker = require('faker');
const fs = require('fs');

const generateReviews = () => {
  // load 200, create 
  const guests = [];
  for (let i = 1; i < 201; i++) {
    let User = {
      id: i,
      reviews: {
        guest_name: faker.name.findName(),
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
  }
  return guests;
};

const generateDates = () => {
  let dates = [];
  for (let i = 0; i < 56; i++) {
    dates.push(`${faker.date.month()} ${Math.floor(
      Math.random() * (2017 - 2013 + 1)
    ) + 2013}`);
  }
  return dates;
}

const generateImages = () => {
  let images = [];
  for (let i = 0; i < 56; i++) {
   images.push(faker.image.avatar()); 
  }
  return images;
}

const generateMessages = () => {
  let messages = [];
  for (let i = 0; i < 56; i++) {
    let message = `${faker.hacker.phrase()} ${faker.hacker.phrase()} ${faker.hacker.phrase()} ${faker.hacker.phrase()}`;
    messages.push(message);
  }
  return messages;
}

const createAndWriteToFile = () => {
  let data = generateReviews();
  let filename = 'mocked_data.js';

  fs.writeFile(filename, JSON.stringify(data), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('file saved!');
  });
};

createAndWriteToFile()