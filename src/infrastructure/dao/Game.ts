import { model, Schema } from 'mongoose';
import { Game } from '../../domain/Game';

const gameSchema = new Schema<Game>({
  users: [{ type: String }],
  userPlaying: { type: String, required: true },
  board: [
    [
      {
        type: String,
      },
    ],
  ],
  winner: { type: String, required: false },
});

export const GameModel = model<Game>('Game', gameSchema);
