import { Game } from '../../domain/Game';
import { GameModel } from '../dao/Game';

export const saveGame = (game: Game): Promise<Game> => {
  return GameModel.create(game);
};

export const createGame = async (): Promise<Game> => {
  await GameModel.deleteMany({}).exec();
  return GameModel.create(new Game(['Player 1', 'Player 2']));
};
