function collapseString(str) {
  let newStr = '';
  let prev, curr;

  for (let i = 0; i < str.length; i++) {
    prev = curr;
    curr = str[i];
    if (prev === curr) continue;
    newStr += curr;
  }

  return newStr;
}

console.log(collapseString('apple')); // => 'aple'
console.log(collapseString('AAAaalviiiiin!!!')); // => 'Aalvin!'
console.log(collapseString('hello app academy')); // => 'helo ap academy'

module.exports = collapseString;
