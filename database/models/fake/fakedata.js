const faker = require('faker')

const loadIntoObj = () => {
  let randomYear = Math.floor(Math.random() * (2017 - 2013 + 1)) + 2013;
  const guests = [];
  for (let i = 0; i < 200; i++) {
    let User = {
      id: i,
      name: faker.name.findName(),
      accuarcy: faker.random.number({min:0, max:5}),
      communication: faker.random.number({min:0, max:5}),
      cleaniness: faker.random.number({min:0, max:5}),
      location: faker.random.number({min:0, max:5}),
      checkin: faker.random.number({min:0, max:5}),
      message: faker.hacker.phrase(),
      date: `${faker.date.month()} ${randomYear}`
    }
    guests.push(User);
  }
  return guests;
}

module.exports.fakeData = loadIntoObj;
