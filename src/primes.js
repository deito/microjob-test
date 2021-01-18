'use strict'

function isPrime(num) {
    for(let i=2; i < Math.sqrt(num); i++){
        if((num % i)==0) return false;
    }
    return true;
}

function getPrimes(limit) {
    const range = [ ...Array(limit + 1).keys()].slice(2);
    return range.filter(n => isPrime(n));
}

function sumPrimes(limit) {
    return getPrimes(limit).reduce((a, b) => a + b, 0);
}

module.exports = {
    isPrime,
    getPrimes,
    sumPrimes
}