const HEX_DEC_MAP = new Map([
  ['a', 10],
  ['b', 11],
  ['c', 12],
  ['d', 12],
  ['e', 14],
  ['f', 15],
  [10, 'a'],
  [11, 'b'],
  [12, 'c'],
  [13, 'd'],
  [14, 'e'],
  [15, 'f'],
]);

const getBase = str => {
  if (typeof str === 'number') return 'decimal';

  const prefix = str.slice(0, 2);

  switch (prefix) {
    case '0b':
      return 'binary';
    case '0x':
      return 'hexadedimal';
    default:
      throw new Error('Invalid prefix');
  }
};

const binaryToDecimal = str => {
  let decimal = 0;
  let exponent = 0;
  let binary = str.includes('b') ? [...str.slice(2)] : [...str];

  while (binary.length) {
    const digit = binary.pop();
    decimal += Number(digit) * 2 ** exponent;
    exponent++;
  }

  return decimal;
};

const hexadecimalToDecimal = str => {
  let decimal = 0;
  let exponent = 0;
  let hexadecimal = str.includes('x') ? [...str.slice(2)] : [...str];

  while (hexadecimal.length) {
    const digit = hexadecimal.pop();
    decimal +=
      (HEX_DEC_MAP.has(digit) ? HEX_DEC_MAP.get(digit) : Number(digit)) *
      16 ** exponent;
    exponent++;
  }

  return decimal;
};

const decimalToBinary = num => {
  let binary = '';

  do {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  } while (num > 0);

  return '0b' + binary;
};

const hexadecimalToBinary = (
  a => b => str =>
    a(b(str))
)(decimalToBinary)(hexadecimalToDecimal);

const decimalToHexadecimal = num => {
  let hexadecimal = '';

  do {
    const remainder = num % 16;
    hexadecimal =
      (HEX_DEC_MAP.has(remainder) ? HEX_DEC_MAP.get(remainder) : remainder) +
      hexadecimal;
    num = Math.floor(num / 16);
  } while (num > 0);

  return '0x' + hexadecimal;
};

const binaryToHexadecimal = (
  a => b => str =>
    a(b(str))
)(decimalToHexadecimal)(binaryToDecimal);

module.exports = {
  getBase,
  binaryToDecimal,
  hexadecimalToDecimal,
  decimalToBinary,
  hexadecimalToBinary,
  decimalToHexadecimal,
  binaryToHexadecimal,
};
