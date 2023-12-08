function myIndexOf(array, target) {
  let index = -1;

  if (!array.length) return index;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      index = i;
      break;
    }
  }

  return index;
}

console.log(myIndexOf([1, 2, 3, 4], 4)); // => 3
console.log(myIndexOf([5, 6, 7, 8], 2)); // => -1

module.exports = myIndexOf;
