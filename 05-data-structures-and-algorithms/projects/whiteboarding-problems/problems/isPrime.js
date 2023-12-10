function isPrime(n) {
  if (n < 2) return false;

  let result = true;

  for (let i = n - 1; i > 1; i--) {
    if (n % i === 0) {
      result = false;
      return result;
    }
  }

  return result;
}

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true);

module.exports = isPrime;
