function shortestWord(sentence) {
  return sentence
    .split(' ')
    .reduce((acc, curr) => (curr.length < acc.length ? curr : acc || curr));
}

console.log(shortestWord('app academy is cool')); // => 'is'
console.log(shortestWord('programming bootcamp')); // => 'bootcamp'

module.exports = shortestWord;
