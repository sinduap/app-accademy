function pairProduct(array, num) {
  let result = [];
  let n = 0;

  while (n < array.length) {
    let m = n + 1;

    while (m < array.length) {
      if (array[n] * array[m] === num) {
        result.push([n, m]);
      }

      m++;
    }

    n++;
  }

  return result;
}

console.log(pairProduct([1, 2, 3, 4, 5], 4)); // => [ [ 0, 3 ] ]
console.log(pairProduct([1, 2, 3, 4, 5], 8)); // => [ [ 1, 3 ] ]
console.log(pairProduct([1, 2, 3, 12, 8], 24)); // => [ [ 1, 3 ], [ 2, 4 ] ]

module.exports = pairProduct;
