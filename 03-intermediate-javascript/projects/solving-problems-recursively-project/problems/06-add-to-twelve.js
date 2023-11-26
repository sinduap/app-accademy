/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/

// your code here
function addToTwelve(arr) {
  if (arr.reduce((a, b) => a + b) < 12) return false;

  let sum = 0;

  for (const [i, el] of arr.entries()) {
    sum += el;

    if (i !== 0 && sum === 12) return true;
    if (sum > 12) return addToTwelve(arr.slice(1));
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
