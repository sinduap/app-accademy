function isPassing(assesments) {
  return (
    assesments.reduce((acc, curr) => acc + curr.score, 0) / assesments.length >=
    70
  );
}

const assessments1 = [
  { number: 1, score: 60 },
  { number: 2, score: 90 },
  { number: 3, score: 80 },
  { number: 4, score: 100 },
  { number: 5, score: 85 },
];

console.log(isPassing(assessments1)); // => true
const assessments2 = [
  { number: 1, score: 60 },
  { number: 2, score: 20 },
  { number: 3, score: 45 },
];

console.log(isPassing(assessments2)); // => false

module.exports = isPassing;
