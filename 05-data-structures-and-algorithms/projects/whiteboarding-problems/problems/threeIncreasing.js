function threeIncreasing(array) {
  let curr, prev, count;

  for (let i = 0; i < array.length; i++) {
    curr = array[i];
    if (prev + 1 === curr) {
      count++;
    } else {
      count = 1;
    }
    if (count === 3) return true;
    prev = curr;
  }

  return false;
}

console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4])); // => true;
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6])); // => false;

module.exports = threeIncreasing;
