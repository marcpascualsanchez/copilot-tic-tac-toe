// express server on port 3000
import express, { Request, Response } from 'express';
import { play } from '../../application/play';
import { GameModel } from '../dao/Game';
import bodyParser from 'body-parser';
import { Game } from '../../domain/Game';

export const router = express();

router.use(bodyParser.json());

router.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

// router for playing the game
router.post('/play', async (req: Request, res: Response) => {
  try {
    const { userName, move } = req.body;
    const game = await GameModel.findOne().exec();
    if (!game) {
      res.status(404).send('Game not found');
      return;
    }
    const parsedGame = new Game(game.users, game.userPlaying, game.board);
    const savedGame = await play(parsedGame, userName, move);
    res.send(savedGame);
    // eslint-disable-next-line prettier/prettier
  } catch (error: any) {
    res.status(500).send(`Something went wrong: ${error.message}`);
  }
});
