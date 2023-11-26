function isFive(num) {
  return num === 5;
}

function isOdd(number) {
  if (typeof number !== 'number') throw new Error();
  return number % 2 !== 0;
}

function myRange(min, max, step = 1) {
  return min < max
    ? Array.from(
        { length: Math.floor((max + 1) / step) },
        (_, i) => min + step * i
      )
    : [];
}

module.exports = { isFive, isOdd, myRange };
