function oddRange(end) {
  return Array.from(
    { length: Math.ceil(end / 2) },
    (_, i) => i + ((i + 1) % end)
  );
}

console.log(oddRange(13)); // => [2,4,5]
console.log(oddRange(6)); // => [5]

module.exports = oddRange;
