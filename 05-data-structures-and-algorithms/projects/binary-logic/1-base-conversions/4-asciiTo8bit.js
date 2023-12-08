const addZeros = require('../utils/addZeros');

// Translate the ASCII strings in the console.logs below to 8-bit binary strings
// Implement the imported helper function addZeros()
//    Read the export file for the explanation of how it works

/******************************************************************************/
const { decimalToBinary } = require('../utils/baseConversions');

const asciiTo8bit = (str, delimiter = '') => {
  // Your code here
  let i = 0;
  let bytes = '';

  while (i < str.length) {
    const codePoint = str.codePointAt(i);
    const binary = decimalToBinary(codePoint);
    const byte = addZeros(binary.slice(2), 8);
    bytes += byte + delimiter;
    i++;
  }
  return bytes;
};

/******************************************************************************/

console.log(asciiTo8bit('123'));
// 001100010011001000110011

console.log(asciiTo8bit('ABC'));
// 010000010100001001000011

console.log(asciiTo8bit('Hello, world!'));
// 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001
