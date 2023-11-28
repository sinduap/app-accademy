function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if (n < 1 || n > 1_000_000)
    throw new RangeError('Valid argument between 1 to 1_000_000');
  return 1 / n;
}

module.exports = {
  returnsThree,
  reciprocal,
};
