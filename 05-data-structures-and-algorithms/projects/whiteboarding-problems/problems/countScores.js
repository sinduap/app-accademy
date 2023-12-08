function countScores(people) {
  return people.reduce(
    (acc, person) =>
      acc[person.name]
        ? { ...acc, [person.name]: acc[person.name] + person.score }
        : { ...acc, [person.name]: person.score },
    {}
  );
}

const ppl = [
  { name: 'Anthony', score: 10 },
  { name: 'Fred', score: 10 },
  { name: 'Anthony', score: -8 },
  { name: 'Winnie', score: 12 },
];
console.log(countScores(ppl)); // => { Anthony: 2, Fred: 10, Winnie: 12 }

const peeps = [
  { name: 'Anthony', score: 2 },
  { name: 'Winnie', score: 2 },
  { name: 'Fred', score: 2 },
  { name: 'Winnie', score: 2 },
  { name: 'Fred', score: 2 },
  { name: 'Anthony', score: 2 },
  { name: 'Winnie', score: 2 },
];

console.log(countScores(peeps)); // => { Anthony: 4, Fred: 4, Winnie: 6 }

module.exports = countScores;
