function variableNameify(array) {
  return array
    .map((word, i) =>
      i === 0
        ? word.toLowerCase()
        : word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join('');
}

console.log(variableNameify(['is', 'prime'])); // => 'isPrime'
console.log(variableNameify(['remove', 'last', 'vowel'])); // => 'removeLastVowel'
console.log(variableNameify(['MaX', 'VALUE'])); // => 'maxValue'

module.exports = variableNameify;
