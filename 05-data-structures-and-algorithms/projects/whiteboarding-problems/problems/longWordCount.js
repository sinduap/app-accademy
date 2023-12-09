function longWordCount(string) {
  return string
    .split(' ')
    .reduce((acc, curr) => (curr.length > 7 ? acc + 1 : acc), 0);
}

console.log(longWordCount('')); // => 0
console.log(longWordCount('short words only')); // => 0
console.log(longWordCount('one reallylong word')); // => 1
console.log(longWordCount('two reallylong words inthisstring')); // => 2
console.log(longWordCount('allwordword longwordword wordswordword')); // => 3
console.log(longWordCount('seventy schfifty five')); // => 1

module.exports = longWordCount;
