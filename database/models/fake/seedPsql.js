const pgp = require('pg-promise')({
  capSQL: true // generate capitalized SQL 
});
const faker = require('faker');

const cn = {
  host: 'localhost',
  port: 5432,
  database: 'reviews',
  user: 'wayne',
  password: 'enyaw13'
};

const db = pgp('postgres://localhost:5432/reviews');
// const db = pgp(localhost);

const cs = new pgp.helpers.ColumnSet(
  ['guest_name', 'communication', 'cleaniness', 'location', 'checkin', 'accuracy', 'message', 'date', 'image', 'value'],
  {table: 'userpage'},
  );


// const randomizeNumber = function(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

function getNextData(t, pageIndex) {
  let data = null;

  if (pageIndex < 1000) {
      data = [];

      for (let i = 0; i < 10000; i++) {
          const idx = pageIndex * 10000 + i; // to insert unique product names
          data.push({
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
          });
      }
      console.log(`inserted batch ${pageIndex}`);
  }
  return Promise.resolve(data);
}

db.tx('massive-insert', t => {
  return t.sequence(index => {
      return getNextData(t, index)
          .then(data => {
              if (data) {
                  const insert = pgp.helpers.insert(data, cs);
                  return t.none(insert);
              }
          });
  });
})
  .then(data => {
      // COMMIT has been executed
      let seconds = data.duration/1000;
      let minutes = Math.floor(seconds/60);
      let actualSeconds = seconds - (minutes * 60);

      console.log('Total batches:', data.total, ', Duration:', data.duration);
      console.log(`It took ${minutes} minutes and ${actualSeconds} seconds`);
  })
  .catch(error => {
      // ROLLBACK has been executed
      console.log(error);
  });