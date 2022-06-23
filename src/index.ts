import { router } from './infrastructure/gateway/router';
import { createGame } from './infrastructure/repository/game';
import { connectDatabase } from './infrastructure/repository/mongoConnection';

async function start(): Promise<void> {
  console.log('Game starting...');
  await connectDatabase();
  await createGame();

  router.listen(3000, () => {
    console.log('Game started on port 3000');
  });
}

start();
