function countInnerElement(array) {
  return array
    .flat()
    .reduce(
      (acc, curr) =>
        acc[curr] ? { ...acc, [curr]: acc[curr] + 1 } : { ...acc, [curr]: 1 },
      {}
    );
}

const arr1 = [
  [1, 2, 4, 5],
  [2, 7, 4],
  [1, 4, 5, 2, 7],
];

console.log(countInnerElement(arr1)); // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}

const arr2 = [
  ['a', 'b', 'c', 'd'],
  ['a', 'b'],
  ['a', 'c', 'd', 'a'],
];

console.log(countInnerElement(arr2)); // => {a: 4, b: 2, c: 2, d: 2}

module.exports = countInnerElement;
