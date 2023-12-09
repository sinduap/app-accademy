function signFlipCount(nums) {
  let count = 0;
  let prev, curr;
  for (let i = 0; i < nums.length; i++) {
    prev = curr;
    curr = nums[i];
    if (i === 0) continue;
    if (prev > 0 !== curr > 0) count++;
  }

  return count;
}

console.log(signFlipCount([5, 6, 10, 3])); // => 0
console.log(signFlipCount([-12, 0, -3, -5])); // => 0
console.log(signFlipCount([-12, 10, -3, -5])); // => 2
console.log(signFlipCount([1, -2, -3, -4])); // => 1
console.log(signFlipCount([-1, 11.3, -3, 100])); // => 3

module.exports = signFlipCount;
