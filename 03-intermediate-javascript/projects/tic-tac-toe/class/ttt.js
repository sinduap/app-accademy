const Screen = require('./screen');
const Cursor = require('./cursor');

class TTT {
  constructor() {
    this.playerTurn = 'O';

    this.grid = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);
    this.cursor.setBackgroundColor();

    // Replace this with real commands
    Screen.addCommand('up', '👆', this.upCommand.bind(this));
    Screen.addCommand('down', '👇', this.downCommand.bind(this));
    Screen.addCommand('right', '👉', this.rightCommand.bind(this));
    Screen.addCommand('left', '👈', this.leftCommand.bind(this));
    Screen.addCommand('return', 'X or O', this.moveCommand.bind(this));

    Screen.render();
  }

  // Remove this
  static testCommand() {
    console.log('TEST COMMAND');
  }

  upCommand() {
    this.cursor.resetBackgroundColor();
    this.cursor.up();
  }

  downCommand() {
    this.cursor.resetBackgroundColor();
    this.cursor.down();
  }

  rightCommand() {
    this.cursor.resetBackgroundColor();
    this.cursor.right();
  }

  leftCommand() {
    this.cursor.resetBackgroundColor();
    this.cursor.left();
  }

  moveCommand() {
    const { row, col } = this.cursor;

    if (this.grid[row][col] !== ' ') return;

    this.grid[row][col] = this.playerTurn;
    Screen.grid = this.grid;
    Screen.render();

    const winner = TTT.checkWin(this.grid);
    if (winner) {
      TTT.endGame(winner);
    }
    this.playerTurn = this.playerTurn === 'O' ? 'X' : 'O';
  }

  static #extractVertical(grid) {
    let result = [];
    for (let i = 0; i < grid.length; i++) {
      let newRow = [];
      for (let j = 0; j < grid[i].length; j++) {
        newRow.push(grid[j][i]);
      }
      result.push(newRow);
    }
    return result;
  }

  static #extractDiagonal(grid) {
    let result = [[], []];
    for (let i = 0; i < grid.length; i++) {
      result[0].push(grid[i][i]);
      result[1].push(grid[i][grid.length - i - 1]);
    }
    return result;
  }

  static checkWin(grid) {
    const isEmpty = grid.flat().every(cell => cell === ' ');
    if (isEmpty) return false;

    const isFilled = grid.flat().every(cell => cell !== ' ');
    if (isFilled) return 'T';

    const horizontal = grid;
    const vertical = this.#extractVertical(grid);
    const diagonal = this.#extractDiagonal(grid);
    const allPossibilities = [...horizontal, ...vertical, ...diagonal];

    for (let i = 0; i < allPossibilities.length; i++) {
      if (allPossibilities[i][0] === ' ') continue;
      const start = allPossibilities[i][0];
      const win = allPossibilities[i].every(cell => cell === start);
      if (win) return start;
    }

    return false;
  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }
}

module.exports = TTT;
