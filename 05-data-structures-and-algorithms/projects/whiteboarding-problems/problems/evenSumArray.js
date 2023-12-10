const evenRange = num =>
  Array.from({ length: Math.floor(num / 2) }, (_, i) => 2 + 2 * i);

const evenSumNum = num => evenRange(num).reduce((a, b) => a + b);

function evenSumArray(array) {
  return array.map(evenSumNum);
}

console.log(evenSumArray([6, 7, 5])); // => [ 12, 12, 6 ]
console.log(evenSumArray([2, 8, 3, 5])); // => [ 2, 20, 2, 6 ]

module.exports = evenSumArray;
