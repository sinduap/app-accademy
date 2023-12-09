function threeInARow(array) {
  let curr, prev, count;

  for (let i = 0; i < array.length; i++) {
    curr = array[i];
    if (prev === curr) {
      count++;
    } else {
      count = 1;
    }
    if (count === 3) return true;
    prev = curr;
  }

  return false;
}

console.log(threeInARow([4, 3, 7, 7, 7, 13, 8])); // => true;
console.log(threeInARow([10, 9, 20, 33, 3, 3])); // => false;

module.exports = threeInARow;
