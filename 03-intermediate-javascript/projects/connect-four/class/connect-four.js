const Screen = require('./screen');
const Cursor = require('./cursor');

class ConnectFour {
  constructor() {
    this.playerTurn = 'O';

    this.grid = [
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ];

    this.cursor = new Cursor(6, 7);

    // Initialize a 6x7 connect-four grid
    Screen.initialize(6, 7);
    Screen.setGridlines(true);

    Screen.addCommand('up', '👆', this.upCommand.bind(this));
    Screen.addCommand('down', '👇', this.downCommand.bind(this));
    Screen.addCommand('right', '👉', this.rightCommand.bind(this));
    Screen.addCommand('left', '👈', this.leftCommand.bind(this));
    Screen.addCommand('return', 'X or O', this.moveCommand.bind(this));

    this.cursor.setBackgroundColor();

    Screen.render();
  }

  // Remove this
  static testCommand() {
    console.log('TEST COMMAND');
  }

  upCommand() {
    this.cursor.up();
  }

  downCommand() {
    this.cursor.down();
  }

  leftCommand() {
    this.cursor.left();
  }

  rightCommand() {
    this.cursor.right();
  }

  moveCommand() {
    const { row, col } = this.cursor;

    if (this.grid[row][col] !== ' ') return;

    this.grid[row][col] = this.playerTurn;

    Screen.setGrid(row, col, this.playerTurn);
    Screen.render();

    const winner = ConnectFour.checkWin(this.grid);
    if (winner) {
      ConnectFour.endGame(winner);
    }

    this.playerTurn = this.playerTurn === 'O' ? 'X' : 'O';
  }

  static #getVertical(grid) {
    let result = [];
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        result[j] ??= [];
        result[j].push(grid[i][j]);
      }
    }

    return result;
  }

  static #getDiagonalUpward(grid) {
    let x,
      y,
      diagonal,
      result = [];

    for (let i = 0; i < grid.length; i++) {
      diagonal = [];
      for (y = i, x = 0; y >= 0; y--, x++) {
        diagonal.push(grid[y][x]);
      }
      result.push(diagonal);
    }

    for (let i = 1; i < grid[0].length; i++) {
      diagonal = [];
      for (y = grid.length - 1, x = i; x < grid[0].length; y--, x++) {
        diagonal.push(grid[y][x]);
      }
      result.push(diagonal);
    }

    return result;
  }

  static #getDiagonalDownward(grid) {
    let reversedGrid = grid.map(row => [...row].reverse());
    return this.#getDiagonalUpward(reversedGrid);
  }

  static #getFourInSeq(arr) {
    if (arr.length < 4) return null;

    let count;
    let curr;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === ' ') {
        count = 0;
        continue;
      }

      if (arr[i] !== curr) {
        count = 1;
        curr = arr[i];
        continue;
      }

      if (arr[i] === curr) count += 1;
      if (count >= 4) return curr;
    }

    return null;
  }

  static checkWin(grid) {
    if (grid.flat().every(cell => cell === ' ')) return false;

    const allPosibilities = [
      ...grid,
      ...this.#getVertical(grid),
      ...this.#getDiagonalUpward(grid),
      ...this.#getDiagonalDownward(grid),
    ];

    for (let i = 0; i < allPosibilities.length; i++) {
      let winner = this.#getFourInSeq(allPosibilities[i]);
      // Return 'X' if player X wins or 'O' if player O wins
      if (winner) return winner;
    }

    // Return 'T' if the game is a tie
    if (!grid.flat().some(cell => cell === ' ')) return 'T';

    // Return false if the game has not ended
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

module.exports = ConnectFour;
