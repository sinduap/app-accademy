function peakFinder(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let curr = array[i];
    let prev = array[i - 1] ?? Number.NEGATIVE_INFINITY;
    let next = array[i + 1] ?? Number.NEGATIVE_INFINITY;
    const isGreater = curr > prev && curr > next;
    if (isGreater) result.push(i);
  }

  return result;
}

console.log(peakFinder([1, 2, 3, 2, 1])); // => [2]
console.log(peakFinder([2, 1, 2, 3, 4, 5])); // => [0, 5]
console.log(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5])); // => [2, 6, 8]

module.exports = peakFinder;
