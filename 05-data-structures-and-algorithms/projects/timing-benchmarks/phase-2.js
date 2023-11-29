const [addNums, addManyNums] = require('./phase-1');

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let nums = [];
  for (let i = increment; i <= increment * 10; i += increment) {
    const num = addNums(i);
    nums.push(num);
  }
  return nums;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let nums = [];
  for (let i = increment; i <= increment * 10; i += increment) {
    const num = addManyNums(i);
    nums.push(num);
  }
  return nums;
}

module.exports = [addNums10, addManyNums10];
