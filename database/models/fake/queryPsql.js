const pgp = require('pg-promise')();

const db = pgp('postgres://localhost:5432/reviews');

const query = async (amountOfQueries) => {
    const randomizeNumber = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let totalTime = 0;

    for (var i = 0; i < amountOfQueries; i++) {
        const startTime = new Date().getTime();
        let id = randomizeNumber(0, 9999999);
        await db.any(`SELECT * FROM userpage WHERE id = ${id}`)
        let endTime = new Date().getTime();
        let time = endTime - startTime;
        totalTime += time;
        console.log(`QUERY TIME: ${endTime - startTime}ms`);

    }
    let avgTime = totalTime / amountOfQueries;
    console.log(`FINAL AVG QUERY TIME: ${avgTime}ms`);
    pgp.end();
    
}

query(1000);