function elementCount(array) {
  return array.reduce(
    (acc, curr) =>
      acc[curr] ? { ...acc, [curr]: acc[curr] + 1 } : { ...acc, [curr]: 1 },
    {}
  );
}

console.log(elementCount(['a', 'a', 'b', 'b'])); // => { "a" : 2, "b" : 2 }
console.log(elementCount(['c', 'a', 'c', 'a', 'b'])); // => { "c": 2, "a": 2, "b": 1 }

module.exports = elementCount;
