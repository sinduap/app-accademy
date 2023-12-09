function reverb(word) {
  const vowels = 'aiueo';
  let n = word.length - 1;
  while (n > 0) {
    if (vowels.includes(word[n].toLowerCase())) break;
    n--;
  }

  return word + (n ? word.slice(n) : '');
}

console.log(reverb('running')); // => 'runninging'
console.log(reverb('wild')); // => 'wildild'
console.log(reverb('debugged')); // => 'debuggeded'
console.log(reverb('my')); // => 'my'

module.exports = reverb;
