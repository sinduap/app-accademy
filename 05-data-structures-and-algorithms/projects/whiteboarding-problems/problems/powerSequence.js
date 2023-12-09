function powerSequence(base, length) {
  let result = [];

  for (let i = 0; i < length; i++) {
    const exponent = i + 1;
    result.push(base ** exponent);
  }

  return result;
}

console.log(powerSequence(3, 4)); // => [ 3, 9, 27, 81 ]
console.log(powerSequence(2, 6)); // => [ 2, 4, 8, 16, 32, 64 ]
console.log(powerSequence(8, 3)); // => [ 8, 64, 512 ]

module.exports = powerSequence;
