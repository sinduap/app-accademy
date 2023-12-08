const isFizz = n => n % 3 === 0;
const isBuzz = n => n % 5 === 0;

function fizzBuzz(max) {
  return Array.from({ length: max }, (_, i) => i).filter(
    n => (isBuzz(n) || isFizz(n)) && !(isBuzz(n) && isFizz(n))
  );
}

console.log(fizzBuzz(20)); // => [3, 5, 6, 9, 10, 12, 18]

module.exports = fizzBuzz;
