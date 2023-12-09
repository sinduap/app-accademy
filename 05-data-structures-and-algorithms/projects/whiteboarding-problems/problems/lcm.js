function lcm(num1, num2) {
  let currNum = num2;
  while (true) {
    if (currNum % num1 === 0) {
      return currNum;
    }
    currNum += num2;
  }
}
console.log(lcm(2, 3)); // => 6
console.log(lcm(6, 10)); // => 30
console.log(lcm(24, 26)); // => 312

module.exports = lcm;
