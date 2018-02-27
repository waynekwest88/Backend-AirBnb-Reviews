const faker = require('faker')

const User = {
  name: faker.name.findName(),
  accuarcy: faker.random.number({min:0, max:5}),
  communication: faker.random.number({min:0, max:5}),
  address: faker.address.streetAddress() + faker.address.city() + faker.address.country(),
  bio: faker.lorem.sentences(),
  image: faker.image.avatar()
}

console.log(User);