function mindPsAndQs(str) {
  const PQ = 'PQ';
  let initialCount = str.matchAll(/(P|Q)/gi) ? 1 : 0;
  let prevHighestCount = initialCount;
  let currCount = initialCount;
  let prevStatus = false;

  for (let i = 0; i < str.length; i++) {
    if (!PQ.includes(str[i])) {
      currCount = initialCount;
      prevStatus = false;
    } else {
      if (prevStatus) currCount++;
      prevStatus = true;
    }
    prevHighestCount =
      prevHighestCount > currCount ? prevHighestCount : currCount;
  }

  return prevHighestCount;
}

console.log(mindPsAndQs('BOOTCAMP')); // => 1
console.log(mindPsAndQs('APCDQQPPC')); // => 4
console.log(mindPsAndQs('PQPQ')); // => 4
console.log(mindPsAndQs('PPPXQPPPQ')); // => 5

module.exports = mindPsAndQs;
