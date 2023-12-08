function mirrorArray(array) {
  let result = Array.from(array);
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}

console.log(mirrorArray([1, 2, 3]));
// => [ 1, 2, 3, 3, 2, 1 ]
console.log(mirrorArray(['a', 'b', 'c', 'd']));
// => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

module.exports = mirrorArray;
