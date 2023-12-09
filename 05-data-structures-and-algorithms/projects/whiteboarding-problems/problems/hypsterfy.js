const hipsterfyWord = require('./hipsterfyWord');

function hipsterfy(sentence) {
  return sentence.split(' ').map(hipsterfyWord).join(' ');
}

console.log(hipsterfy('proper')); // => "propr"
console.log(hipsterfy('proper tonic panther')); // => "propr tonc panthr"
console.log(hipsterfy('towel flicker banana')); // => "towl flickr banan"
console.log(hipsterfy('runner anaconda')); // => "runnr anacond"
console.log(hipsterfy('turtle cheeseburger fries')); // => "turtl cheeseburgr fris"

module.exports = hipsterfy;
