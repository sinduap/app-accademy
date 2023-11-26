const readline = require('readline');

const NUM_ATTEMPTS = 5;

const state = {
  min: null,
  max: null,
  hiddenNum: null,
  numAttempts: null,
};

const gameInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getRandomRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

function startGame() {
  gameInterface.question('Enter a guess limit: ', handleAskLimit);
  gameInterface.write('5');
}

function handleAskLimit(num = NUM_ATTEMPTS) {
  state.numAttempts = Number(num);
  gameInterface.question('Enter a max number: ', handleResponseMax);
}

function handleResponseMax(num) {
  state.max = Number(num);
  gameInterface.question('Enter a min number: ', handleResponseMin);
}

function handleResponseMin(num) {
  state.min = Number(num);
  state.hiddenNum = getRandomRange(state.max, state.min);

  gameInterface.write(
    `I'm thinking of a number between ${state.min} and ${state.max}...\n`
  );

  askGuess();
}

function askGuess() {
  gameInterface.question('Guess the number: ', handleResponseGuess);
}

function handleResponseGuess(num) {
  state.numAttempts--;

  const correct = Number(num) === state.hiddenNum;
  const tooHigh = Number(num) > state.hiddenNum;

  if (!correct && state.numAttempts > 0) {
    gameInterface.write(`Too ${tooHigh ? 'high' : 'low'}\n`);
    askGuess();
    return;
  }

  const winning = state.numAttempts !== 0;

  const finalMessage = winning
    ? 'Correct!\nYOU WON.\n'
    : 'Sorry...\nYOU LOSE\n';

  gameInterface.write(finalMessage);
  gameInterface.close();
}

startGame();
