import { connect } from 'mongoose';

export async function connectDatabase(): Promise<void> {
  // try catch with log
  try {
    console.log('Connecting to database...');
    await connect('mongodb://0.0.0.0:27017/tic-tac-toe');
    console.log('Successfully connected to mongoDB');
  } catch (error) {
    console.log(error);
  }
}
