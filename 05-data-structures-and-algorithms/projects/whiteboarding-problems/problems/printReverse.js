function printReverse(min, max) {
  return Array.from({ length: max - min - 1 }, (_, i) => max - i - 1);
}

console.log(printReverse(13, 18)); // => [17, 16, 15, 14]
console.log(printReverse(90, 94)); // => [93, 92, 91]

module.exports = printReverse;
