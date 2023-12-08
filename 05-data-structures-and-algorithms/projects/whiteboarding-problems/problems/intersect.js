function intersect(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) result.push(arr2[j]);
    }
  }

  return result;
}

console.log(intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e'])); // => [ 'b', 'd' ]
console.log(intersect(['a', 'b', 'c'], ['x', 'y', 'z'])); // => []

module.exports = intersect;
