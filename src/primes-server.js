'use strict'
const exrpess = require('express');
const app = exrpess();
const { sumPrimes } = require('./primes');

app.get('/sum-primes', (req, res) => {
    const { limit } = req.query;
    console.log("limit: "+limit);
    console.time('sumPrimes');
    //const sum = sumPrimes(parseInt(limit));
    const sum = sumPrimes(+limit);
    console.timeEnd('sumPrimes');
    res.send(`The sum for limit: ${limit} is ${sum}`);
});

app.listen(8888, () => {
    console.log('Listening with event-loop blocking');
})