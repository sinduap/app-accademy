function reverse2D(array) {
  return array.flat().reverse().join('');
}

const arr1 = [
  ['a', 'b', 'c', 'd'],
  ['e', 'f'],
  ['g', 'h', 'i'],
];

console.log(reverse2D(arr1)); // => 'ihgfedcba'
const arr2 = [
  ['Julian', 'Matt', 'Mike'],
  ['Oscar', 'Patrick'],
];
console.log(reverse2D(arr2)); // => 'PatrickOscarMikeMattJulian'

module.exports = reverse2D;
