const pgp = require('pg-promise')({
  capSQL: true // generate capitalized SQL 
});

const db = pgp('postgres://localhost:5432/reviews');

let query = () => {
    let startTime = new Date().getTime();
    db.any('SELECT * FROM list WHERE id = 9999998')
    .then((data) => {
        let endTime = new Date().getTime();
        console.log(data);
        console.log(`${endTime - startTime} ms`);
    })
    .then(() => {
        pgp.end();
    })
    .catch((err) => {
        console.log(err);
    })
}

query();