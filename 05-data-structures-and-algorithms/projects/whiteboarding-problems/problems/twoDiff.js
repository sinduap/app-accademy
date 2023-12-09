function twoDiff(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] - array[j] === 2 || array[j] - array[i] === 2) {
        result.push([i, j]);
      }
    }
  }

  return result;
}

console.log(twoDiff([2, 3, 4, 6, 1, 7])); // => [[0, 2], [1, 4], [2, 3]]
console.log(twoDiff([0, 2, 4, 3, 5])); // => [[0, 1], [1, 2], [3,4]]
console.log(twoDiff([])); // => []

module.exports = twoDiff;
