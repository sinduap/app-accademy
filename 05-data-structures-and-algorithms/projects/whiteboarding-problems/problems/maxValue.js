function maxValue(array) {
  let result = null;

  if (!array.length) return result;

  result = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < array.length; i++) {
    result = array[i] > result ? array[i] : result;
  }

  return result;
}

console.log(maxValue([12, 6, 43, 2])); // => 43
console.log(maxValue([])); // => null
console.log(maxValue([-4, -10, 0.43])); // => 0.43

module.exports = maxValue;
