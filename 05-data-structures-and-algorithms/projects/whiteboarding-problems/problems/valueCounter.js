function valueCounter(obj, val) {
  return Object.values(obj).reduce(
    (acc, curr) => (curr === val ? acc + 1 : acc),
    0
  );
}

const obj1 = { 1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne' };
console.log(valueCounter(obj1, 'Anne')); // => 3

const obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 };
console.log(valueCounter(obj2, 88)); // => 0

const pairs = { Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne' };
console.log(valueCounter(pairs, 'Roman')); // => 2

module.exports = valueCounter;
