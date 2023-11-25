function oddIndices(arr) {
  // Return an array containing all the odd indices in the array
  // Your code here
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) continue;
    result.push(arr[i]);
  }

  return result;
}

function oddReverse(arr) {
  // Return an array containing all the odd indices starting from the end
  // Your code here
  const result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (i % 2 === 0) continue;
    result.push(arr[i]);
  }

  return result;
}

function secondPower(arr) {
  // Return an array containing all indices that are powers of 2
  // Your code here
  const result = [];

  for (let i = 1; i < arr.length; i *= 2) {
    result.push(arr[i]);
  }

  return result;
}

function nthPower(arr, n) {
  // Return an array containing all indices that are powers of n
  // Your code here
  const result = [];

  for (let i = 1; i < arr.length; i *= n) {
    result.push(arr[i]);
  }

  return result;
}

function firstHalf(arr) {
  // Return an array containing the first half of an array
  // Include middle index on odd length arr
  // Your code here
  const result = [];

  for (let i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {
    result.push(arr[i]);
  }

  return result;
}

console.log(firstHalf([1, 2, 3, 4, 5]));

function secondHalf(arr) {
  // Return an array containing the second half of an array
  // Exclude middle index on odd length arr
  // Your code here
  const result = [];

  for (let i = Math.ceil(arr.length / 2); i < arr.length; i++) {
    result.push(arr[i]);
  }

  return result;
}

module.exports = {
  oddIndices,
  oddReverse,
  secondPower,
  nthPower,
  firstHalf,
  secondHalf,
};
