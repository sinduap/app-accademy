// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

try {
  let res = sum(null);
  console.log(res);
} catch (err) {
  console.log(err.message);
}

// 2.
function sayName(name) {
  if (typeof name !== 'string')
    throw new TypeError('Invalid name! Must be a string');
  console.log(name);
}

// tests
try {
  sayName('Alex');
  sayName(1);
} catch (err) {
  console.log(err.message);
}
// Your code here

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error('There was no greeting given.');
  }

  console.log(greeting);
}

//tests
try {
  greet();
} catch (err) {
  console.log('Hello World');
}
