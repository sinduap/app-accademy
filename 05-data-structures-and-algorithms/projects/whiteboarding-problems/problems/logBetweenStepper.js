function logBetweenStepper(min, max, step) {
  return Array.from(
    { length: Math.floor((max - min) / step) + 1 },
    (_, i) => min + step * i
  );
}

console.log(logBetweenStepper(-10, 15, 5));
// => [-10, -5, 0, 5, 10, 15]

module.exports = logBetweenStepper;
