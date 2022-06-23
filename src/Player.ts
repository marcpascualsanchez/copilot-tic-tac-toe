// Declare player class to play rock-paper-scissors game

export class Player {
  name: string;
  move: string;

  constructor(name: string, move: string) {
    this.name = name;
    this.move = move;
  }
}
