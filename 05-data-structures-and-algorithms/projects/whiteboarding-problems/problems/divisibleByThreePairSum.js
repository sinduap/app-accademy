function divisibleByThreePairSum(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const sum = array[i] + array[j];
      if (sum % 3 === 0) {
        result.push([i, j]);
      }
    }
  }

  return result;
}

const arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
console.log(arr1); // => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

const arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
console.log(arr2); // => [[1, 3]]

module.exports = divisibleByThreePairSum;
