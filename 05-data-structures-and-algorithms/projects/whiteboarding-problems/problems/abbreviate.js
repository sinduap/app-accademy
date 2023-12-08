function abbreviate(sentence) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const sentenceArr = sentence.split(' ');
  const newSentenceArr = [];

  for (let i = 0; i < sentenceArr.length; i++) {
    let word = sentenceArr[i];
    let newWord = '';

    if (word.length > 4) {
      for (let j = 0; j < word.length; j++) {
        if (vowels.includes(word[j])) continue;
        newWord += word[j];
      }
    }

    newSentenceArr.push(newWord || word);
  }

  return newSentenceArr.join(' ');
}

console.log(abbreviate('the bootcamp is fun')); // => 'the btcmp is fun'
console.log(abbreviate('programming is fantastic')); // => 'prgrmmng is fntstc'
console.log(abbreviate('hello world')); // => 'hll wrld'
console.log(abbreviate('how are you')); // => 'how are you'

module.exports = abbreviate;
