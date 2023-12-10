function vowelShift(sentence) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let newSentence = '';

  for (let i = 0; i < sentence.length; i++) {
    let newLetter;
    if (vowels.includes(sentence[i])) {
      const index = vowels.indexOf(sentence[i]);
      newLetter = vowels[index === 4 ? 0 : index + 1];
    } else {
      newLetter = sentence[i];
    }
    newSentence += newLetter;
  }

  return newSentence;
}

console.log(vowelShift('bootcamp')); // => 'buutcemp'
console.log(vowelShift('hello world')); // => 'hillu wurld'
console.log(vowelShift('on the hunt')); // => 'un thi hant'

module.exports = vowelShift;
