class TicTacToe {
  constructor(){
    this.moves = [ [ 'X', 1 ],
  [ 'O', 2 ],
  [ 'X', 3 ],
  [ 'O', 4 ],
  [ 'X', 5 ],
  [ 'O', 7 ],
  [ 'X', 8 ],
  [ 'O', 6 ],
  [ 'X', 0 ] ];
    console.log(this.renderBoard(this.moves))
    //this.startGame();
  }
  
  renderBoard(moves) {
   return ` ${this.isPresent(0)}|${this.isPresent(1)}|${this.isPresent(2)} \n _____ \n ${this.isPresent(3)}|${this.isPresent(4)}|${this.isPresent(5)} \n _____ \n ${this.isPresent(6)}|${this.isPresent(7)}|${this.isPresent(8)}\n` ;
  }
  
  isPresent(num){
    for(let i = 0; i < this.moves.length; i++) {
      if (this.moves[i][1] === num) return this.moves[i][0];
    }
    return '?';
  }
  
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