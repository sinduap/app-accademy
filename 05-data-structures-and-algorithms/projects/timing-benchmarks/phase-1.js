// Adds up positive integers from 1-n
function addNums(n) {
  // Fill this in
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}

// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  // Fill this in
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += addNums(i);
  }
  return result;
}

const addNumsFast = n => (n / 2) * (n + 1);

const addManyNumsFast = n => {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += addNumsFast(i);
  }
  return result;
};

// Optimized code,
// Comment this
module.exports = [addNums, addManyNums];

// Uncomment this
// module.exports = [addNumsFast, addManyNumsFast];
