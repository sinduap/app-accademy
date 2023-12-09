function hipsterfyWord(word) {
  const vowels = 'aiueo';
  let n = word.length - 1;
  while (n > 0) {
    if (vowels.includes(word[n].toLowerCase())) break;
    n--;
  }

  return word.slice(0, n) + word.slice(n + 1);
}

console.log(hipsterfyWord('proper')); // => 'propr'
console.log(hipsterfyWord('tonic')); // => 'tonc'
console.log(hipsterfyWord('PANTHER')); // => 'PANTHR'
console.log(hipsterfyWord('BACKWARDS')); // => 'BACKWRDS'

module.exports = hipsterfyWord;
