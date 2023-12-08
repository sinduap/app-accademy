function factorArray(array, number) {
  let result = [];

  if (!array.length) return result;

  for (let i = 0; i < array.length; i++) {
    if (number % array[i] === 0) {
      result.push(array[i]);
    }
  }

  return result;
}

console.log(factorArray([2, 3, 4, 5, 6], 20)); // => [2,4,5]
console.log(factorArray([2, 3, 4, 5, 6], 35)); // => [5]
console.log(factorArray([10, 15, 20, 25], 5)); // => []

module.exports = factorArray;
