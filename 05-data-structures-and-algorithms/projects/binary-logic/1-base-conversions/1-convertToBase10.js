// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const {
  getBase,
  binaryToDecimal,
  hexadecimalToDecimal,
} = require('../utils/baseConversions');

const convertToBase10 = str => {
  // Your code here
  const base = getBase(str);

  switch (base) {
    case 'binary':
      return binaryToDecimal(str);
    case 'hexadedimal':
      return hexadecimalToDecimal(str);
    default:
      throw new Error('Invalid number');
  }
};

/******************************************************************************/

console.log(convertToBase10('0b1100')); // 12
console.log(convertToBase10('0b0101')); // 5
console.log(convertToBase10('0b1000')); // 8
console.log(convertToBase10('0b0111')); // 7

console.log('––––––');

console.log(convertToBase10('0b10100101')); // 165
console.log(convertToBase10('0b11111111')); // 255
console.log(convertToBase10('0b01010101')); // 85
console.log(convertToBase10('0b00110011')); // 51

console.log('––––––');

console.log(convertToBase10('0xf')); // 15
console.log(convertToBase10('0xfa')); // 250
console.log(convertToBase10('0x1234')); // 4660
console.log(convertToBase10('0xc9a1')); // 51617
console.log(convertToBase10('0xbf12')); // 48914
