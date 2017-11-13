class TicTacToe {
  constructor(){
    this.moves = [];
    this.startGame();
  }
  
  // renderBoard(moves) {
  //   |  |
  // ------
  // }
  
  startGame() {
    console.log('X goes first!');
    this.askForMove('X');
    while(this.moves.length !== 9) {
      this.askForMove('O');
      this.askForMove('X');
    }
    console.log('Game Over!');

  }
  askForMove(type) {
    let move;
    while(!(move >= 0 && move <= 8 )) {
      move = prompt(`${type}, where would you like to go? Board: ${this.moves}`);
      for(let i = 0; i < this.moves.length; i++) {
        if(this.moves[i][1] === move) {
          move = undefined;
        }
      }
    }
    this.moves.push([type, move]);
    console.log(this.moves);
  }
}

let game = new TicTacToe();