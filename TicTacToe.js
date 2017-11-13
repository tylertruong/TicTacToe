class TicTacToe {
  constructor(){
    this.moves = [];
  
    this.startGame();
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
    console.log('Game starting!');
    this.askForMove('X');
    while(this.moves.length !== 9) {
      this.askForMove('O');
      this.askForMove('X');
    }
    console.log(this.moves);
    console.log(this.renderBoard(this.moves));
    console.log('Cats Game!');

  }
  
  checkWinCondition() {
    const winners = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    
    for (let i = 0; i < winners.length; i++) {
      if(this.isPresent(winners[i][0]) === this.isPresent(winners[i][1]) && this.isPresent(winners[i][1]) === this.isPresent(winners[i][2]) && this.isPresent(winners[i][0]) !== '?') {
          console.log('The winner is', this.isPresent(winners[i][0]));
        }
    }
  }
  
  askForMove(type) {
    let move;
    while(!(move >= 0 && move <= 8 )) {
      move = prompt(`${type}, where would you like to go? \n \n Board: \n ${this.renderBoard(this.moves)}`);
      for(let i = 0; i < this.moves.length; i++) {
        if(this.moves[i][1] === move) {
          move = undefined;
        }
      }
    }
    this.moves.push([type, parseInt(move)]);
    }
}

let game = new TicTacToe();