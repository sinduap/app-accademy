function countRepeats(string) {
  const mapCharToCount = string
    .split('')
    .reduce(
      (acc, curr) =>
        acc[curr] !== undefined ? { ...acc, [curr]: 1 } : { ...acc, [curr]: 0 },
      {}
    );

  return Object.values(mapCharToCount)
    .filter(Boolean)
    .reduce((a, b) => a + b, 0);
}

console.log(countRepeats('calvin')); // => 0
console.log(countRepeats('caaaalvin')); // => 1
console.log(countRepeats('pops')); // => 1
console.log(countRepeats('mississippi')); // => 3
console.log(countRepeats('hellobootcampprep')); // => 4

module.exports = countRepeats;
