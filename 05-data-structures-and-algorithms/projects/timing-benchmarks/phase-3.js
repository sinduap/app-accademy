const [addNums, addManyNums] = require('./phase-1');

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code

  // Your code here
  // Fill this in
  let nums = [];
  for (let i = increment; i <= increment * 10; i += increment) {
    // console.time('Timestamp');
    const start = Date.now();
    const num = addNums(i);
    // console.timeEnd('Timestamp');
    const end = Date.now();
    console.log(end - start);
    // console.log('\n***********\n');

    nums.push(num);
  }
  return nums;
}

function addManyNums10Timing(increment) {
  // Copy your `addManyNums10` code here
  // Then, add timing code
  // Your code here
  let nums = [];
  for (let i = increment; i <= increment * 10; i += increment) {
    // console.time('Timestamp');
    const start = Date.now();
    const num = addManyNums(i);
    const end = Date.now();
    // console.timeEnd('Timestamp');
    console.log(end - start);
    // console.log(`Diff time: ${end - start}ms`);

    nums.push(num);
  }
  return nums;
}

console.log('\n***********\n');

n = 1000000;
console.log(`addNums(${n}): `);
console.log('\n***********\n');
addNums10Timing(n);

console.log('\n***********\n');

n = 5000;
console.log(`addManyNums(${n}): `);
console.log('\n***********\n');
addManyNums10Timing(n);
