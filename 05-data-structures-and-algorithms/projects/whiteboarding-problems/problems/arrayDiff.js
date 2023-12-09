function arrayDiff(arr1, arr2) {
  return arr1.filter(el => !arr2.includes(el));
}

const array1 = [1, 23, 2, 43, 3, 4];
const array2 = [3, 23];
console.log(arrayDiff(array1, array2)); // => [1, 2, 43 ,4]

const array3 = ['a', 'ab', 'c', 'd', 'c'];
const array4 = ['d'];
console.log(arrayDiff(array3, array4)); // => ['a', 'ab', 'c', 'c']

module.exports = arrayDiff;
