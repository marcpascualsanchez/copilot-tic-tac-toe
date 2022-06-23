import { Game } from '../domain/Game';
import { GameModel } from '../infrastructure/dao/Game';

interface Move {
  x: number;
  y: number;
}

export async function play(
  game: Game,
  userName: string,
  move: Move,
): Promise<Game> {
  if (game.userPlaying !== userName) {
    throw new Error('User is not playing');
  }

  if (game.board[move.x][move.y]) {
    throw new Error('Move is not empty');
  }

  game.board[move.x][move.y] = game.userPlaying;
  if (game.isWinner(userName)) {
    game.winner = userName;
  } else {
    game.userPlaying = game.users.find(u => u !== game.userPlaying)!;
  }

  await GameModel.findOneAndUpdate(undefined, game).exec();

  return game;
}
