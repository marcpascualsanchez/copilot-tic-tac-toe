// declare Game class to play rock-paper-scissors with Player class
import { Player } from './Player';

export class Game {
  player1: Player;
  player2: Player;

  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
  }

  play() {
    if (this.player1.move === this.player2.move) {
      return 'It\'s a tie!';
    }
    if (this.player1.move === 'rock') {
      if (this.player2.move === 'paper') {
        return 'Player 2 wins!';
      } else {
        return 'Player 1 wins!';
      }
    } else if (this.player1.move === 'paper') {
      if (this.player2.move === 'scissors') {
        return 'Player 2 wins!';
      } else {
        return 'Player 1 wins!';
      }
    } else if (this.player1.move === 'scissors') {
      if (this.player2.move === 'rock') {
        return 'Player 2 wins!';
      } else {
        return 'Player 1 wins!';
      }
    }
    return 'No me la líes eh';
  }

  display() {
    console.log(`${this.player1.name} played ${this.player1.move}`);
    console.log(`${this.player2.name} played ${this.player2.move}`);
    console.log(this.play());
  }

  // make move random for player1 and player2
  static randomMove() {
    const moves = ['rock', 'paper', 'scissors'];
    return moves[Math.floor(Math.random() * moves.length)];
  }

  static start() {
    const player1 = new Player('Player 1', Game.randomMove());
    const player2 = new Player('Player 2', Game.randomMove());
    const game = new Game(player1, player2);
    game.display();
  }
}
