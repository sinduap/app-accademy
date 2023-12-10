function splitHalfArray(array) {
  const n = Math.floor(array.length / 2);

  return [array.slice(0, n), array.slice(-n)];
}

console.log(splitHalfArray([1, 2, 3, 4, 5]));
// => [ [ 1, 2 ], [ 4, 5 ] ]

console.log(splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']));
// => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]

module.exports = splitHalfArray;
