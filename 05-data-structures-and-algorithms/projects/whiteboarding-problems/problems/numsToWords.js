function numsToWords(numString) {
  let words = '';
  let nums = [
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
  ];

  for (let i = 0; i < numString.length; i++) {
    words += nums[Number(numString[i]) - 1];
  }

  return words;
}

console.log(numsToWords('42')); // => 'FourTwo'
console.log(numsToWords('123')); // => 'OneTwoThree'
console.log(numsToWords('159598')); // => 'OneFiveNineFiveNineEight'

module.exports = numsToWords;
