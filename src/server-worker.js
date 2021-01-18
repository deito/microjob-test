'use strict'
const path = require('path');
const { start, job } = require('microjob');
const exrpess = require('express');
const app = exrpess();
const primesPath = path.resolve(__dirname, 'primes.js');
console.log('primesPath: '+primesPath);

app.get('/sum-primes', async (req, res) => {
    const { limit } = req.query;
    const sum = await job(
        (dataParam) => {
            const { sumPrimes } = require(dataParam.primesPath);
            const limitValue = dataParam.limitParam;
            return sumPrimes(limitValue);
        }, 
        {
            data: {
                limitParam: +limit, // +limit = parseInt(limit)
                primesPath: primesPath
            } // aca el objeto tiene que llamarce necesariamente 'data'
        }
    );
    res.send(`The sum for limit: ${limit} is ${sum}`);
});

app.listen(8888, async () => {
    await start();
    console.log('Listening with worker pool');
})