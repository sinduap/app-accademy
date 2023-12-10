function moreDotLessDash(str) {
  let dotCount = 0;
  let dashCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '.') {
      dotCount++;
    } else if (str[i] === '-') dashCount++;
  }

  return dotCount > dashCount;
}

console.log(moreDotLessDash('2-D arrays are fun. I think.')); // => true
console.log(moreDotLessDash('.-.-.')); // => true
console.log(moreDotLessDash('.-')); // => false
console.log(moreDotLessDash('..--')); // => false

module.exports = moreDotLessDash;
