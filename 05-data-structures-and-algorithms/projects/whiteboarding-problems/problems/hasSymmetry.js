const splitHalfArray = require('./splitHalfArray');

function hasSymmetry(array) {
  const [first, second] = splitHalfArray(array);

  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[second.length - 1 - i]) return false;
  }

  return true;
}

console.log(hasSymmetry([1, 2, 3, 3, 2, 1])); // => true
console.log(hasSymmetry([1, 2, 3, 3, 4, 1])); // => false
console.log(hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat'])); // => true
console.log(hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat'])); // => false

module.exports = hasSymmetry;
