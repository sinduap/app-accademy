const findMinimum = arr => {
  // Your code here
  return [...arr].sort((a, b) => a - b).at(0);
};

const runningSum = arr => {
  // Your code here
  let prev;
  return arr.map(num => {
    const curr = num + (prev ?? 0);
    prev = curr;
    return curr;
  });
};

const isEven = num => num % 2 === 0;

const evenNumOfChars = arr => {
  // Your code here
  return arr.reduce((acc, curr) => (isEven(curr.length) ? ++acc : acc), 0);
};

const smallerThanCurr = arr => {
  // Your code here
  const sorted = [...arr].sort();
  return arr.map((num, i) => sorted.indexOf(num));
};

const twoSum = (arr, target) => {
  // Your code here
  let temp = [...arr].reverse();

  for (const num1 of arr) {
    temp.pop();

    for (const num2 of temp) {
      if (num1 + num2 === target) return true;
    }
  }

  return false;
};

const secondLargest = arr => {
  // Your code here
  if (!arr || arr.length === 1) return void 0;
  return [...arr].sort().at(arr.length - 2);
};

const random = (min, max) => Math.floor(Math.random() * max + min);

const shuffle = arr => {
  // Your code here
  let shuffledArr = [...arr];

  for (let i of arr.keys()) {
    let randomIndex, randomTarget;
    let curr = shuffledArr.at(i);

    while (!randomIndex || randomIndex === curr) {
      randomIndex = random(0, shuffledArr.length);
      randomTarget = shuffledArr.at(randomIndex);
    }

    shuffledArr[i] = randomTarget;
    shuffledArr[randomIndex] = curr;
  }
  return shuffledArr;
};

module.exports = [
  findMinimum,
  runningSum,
  evenNumOfChars,
  smallerThanCurr,
  twoSum,
  secondLargest,
  shuffle,
];
