const faker = require('faker')

let randomYear = Math.floor(Math.random() * (2017 - 2013 + 1)) + 2013;


const Guests = [];
for (let i = 0; i < 200; i++) {
  let User = {
    id: i,
    name: faker.name.findName(),
    accuarcy: faker.random.number({min:0, max:5}),
    communication: faker.random.number({min:0, max:5}),
    cleaniness: faker.random.number({min:0, max:5}),
    location: faker.random.number({min:0, max:5}),
    checkin: faker.random.number({min:0, max:5}),
    date: `${faker.date.month()} ${randomYear}`
  }
  Guests.push(User);
}

export default Guests
