const pgp = require('pg-promise')();

const db = pgp('postgres://localhost:5432/reviews');

let query = () => {
    let startTime = new Date().getTime();
    db.any('SELECT * FROM userpage WHERE id = 9999998')
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