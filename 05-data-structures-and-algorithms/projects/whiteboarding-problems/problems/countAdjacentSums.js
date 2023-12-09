function countAdjacentSums(array, n) {
  return array.reduce(
    (acc, curr, i) => (curr + array[i + 1] === n ? acc + 1 : acc),
    0
  );
}

console.log(countAdjacentSums([1, 5, 1], 6)); // => 2
console.log(countAdjacentSums([7, 2, 4, 6], 7)); // => 0
console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13)); // => 3

module.exports = countAdjacentSums;
