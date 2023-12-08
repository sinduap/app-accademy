const isPrime = require('./isPrime');

function firstNPrimes(n) {
  let result = [];

  for (let i = 2; i < Number.MAX_SAFE_INTEGER; i++) {
    if (result.length === n) break;

    if (isPrime(i)) result.push(i);
  }

  return result;
}

console.log(firstNPrimes(0)); // => []
console.log(firstNPrimes(1)); // => [2]
console.log(firstNPrimes(4)); // => [2, 3, 5, 7]

module.exports = firstNPrimes;
