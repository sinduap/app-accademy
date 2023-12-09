const isPrime = require('./isPrime');

function nextTwoPrimes(num) {
  let result = [];

  while (result.length < 2) {
    num++;
    if (isPrime(num)) result.push(num);
  }

  return result;
}

console.log(nextTwoPrimes(2)); // => [ 3, 5 ]
console.log(nextTwoPrimes(3)); // => [ 5, 7 ]
console.log(nextTwoPrimes(7)); // => [ 11, 13 ]
console.log(nextTwoPrimes(8)); // => [ 11, 13 ]
console.log(nextTwoPrimes(20)); // => [ 23, 29 ]
console.log(nextTwoPrimes(97)); // => [ 101, 103 ]

module.exports = nextTwoPrimes;
