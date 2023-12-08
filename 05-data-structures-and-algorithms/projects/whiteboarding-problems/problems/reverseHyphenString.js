function reverseHyphenString(string) {
  return string.split('-').reverse().join('-');
}

console.log(reverseHyphenString('Go-to-the-store')); // => "store-the-to-Go"
console.log(reverseHyphenString('Jump,-jump-for-joy')); // => "joy-for-jump-Jump,"

module.exports = reverseHyphenString;
