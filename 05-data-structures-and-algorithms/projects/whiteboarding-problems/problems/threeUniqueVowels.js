function threeUniqueVowels(string) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      vowels = vowels.filter(char => char !== string[i]);
      if (vowels.length === 2) return true;
    }
  }

  return false;
}

console.log(threeUniqueVowels('delicious')); // => true
console.log(threeUniqueVowels('the bootcamp')); // => true
console.log(threeUniqueVowels('bootcamp')); // => false
console.log(threeUniqueVowels('dog')); // => false
console.log(threeUniqueVowels('go home')); // => false

module.exports = threeUniqueVowels;
