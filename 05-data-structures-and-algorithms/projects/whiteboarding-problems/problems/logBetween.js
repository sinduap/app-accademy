function logBetween(min, max) {
  return Array.from({ length: max - min + 1 }, (_, i) => i + min);
}

console.log(logBetween(-1, 2)); // => [-1, 0, 1, 2]
console.log(logBetween(14, 6)); // => []
console.log(logBetween(4, 6)); // => [4, 5, 6]

module.exports = logBetween;
