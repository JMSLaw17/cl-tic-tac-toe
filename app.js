const prompt = require('prompt');

class Game {
  constructor() {
    this.board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    this.turn = 'X';
    this.startTurn();
  }

  printBoard() {
    console.log(this.board[0][0], '|', this.board[0][1], '|', this.board[0][2]);
    console.log('_________');
    console.log(this.board[1][0], '|', this.board[1][1], '|', this.board[1][2]);
    console.log('_________');
    console.log(this.board[2][0], '|', this.board[2][1], '|', this.board[2][2]);
  }

  checkForWin(char) {
    for (let i = 0; i < this.board.length; i++) {
      if (char === this.board[i][0] && char === this.board[i][1] && char === this.board[i][2]) {
        return true;
      }
    }

    for (let i = 0; i < this.board.length; i++) {
      if (char === this.board[0][i] && char === this.board[1][i] && char === this.board[2][i]) {
        return true;
      }
    }

    if (char === this.board[0][0] && char === this.board[1][1] && char === this.board[2][2]) {
      return true;
    }

    if (char === this.board[2][0] && char === this.board[1][1] && char === this.board[0][2]) {
      return true;
    }

    return false;
  }

  prompt() {
    prompt.get(['Xcoord', 'Ycoord'], (err, result) => {
      if (err) {
        console.log(err);
      }
      else {
        let x = Number(result.Xcoord);
        let y = Number(result.Ycoord);

        if (this.board[x][y] === ' ') {
          this.board[x][y] = this.turn;
          if (this.checkForWin(this.turn)) {
            console.log(this.turn + ' wins!');
            this.printBoard();
          }
          else {
            this.turn = this.turn === 'X' ? 'O' : 'X';
            this.startTurn();
          }
        }
        else {
          console.log('That space is already taken');
          this.prompt();
        }
      }
    });
  }

  startTurn() {
    console.log("It's player " + this.turn + "'s turn");
    this.printBoard();
    this.prompt();
  }
}

const game = new Game();