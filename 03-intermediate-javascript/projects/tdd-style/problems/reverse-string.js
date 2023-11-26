module.exports = function reverseString(string) {
  if (typeof string !== 'string') throw new TypeError('Invalid argument');
  return string.split('').reverse().join('');
};
