export const CELLS_PER_ROW = 3;
export const CELLS_PER_COLUMN = 3;

export class Game {
  id: string;
  users: string[];
  userPlaying: string;
  board: string[][];
  winner: string | null;

  constructor(
    users: string[],
    userPlaying: string | null = null,
    board: string[][] | null = null,
  ) {
    this.id = '';
    this.users = users.map(user => user);
    this.userPlaying = userPlaying ? userPlaying : users[0];
    this.board = board ? board : this.createBoard();
    this.winner = null;
  }

  createBoard(): string[][] {
    const board: string[][] = [];
    for (let i = 0; i < CELLS_PER_ROW; i++) {
      board[i] = [];
      for (let j = 0; j < CELLS_PER_COLUMN; j++) {
        board[i][j] = '';
      }
    }
    return board;
  }

  isWinner(userName: string): boolean {
    const board = this.board;
    const winningCombinations = [
      [
        [0, 0],
        [0, 1],
        [0, 2],
      ],
      [
        [1, 0],
        [1, 1],
        [1, 2],
      ],
      [
        [2, 0],
        [2, 1],
        [2, 2],
      ],
      [
        [0, 0],
        [1, 0],
        [2, 0],
      ],
      [
        [0, 1],
        [1, 1],
        [2, 1],
      ],
      [
        [0, 2],
        [1, 2],
        [2, 2],
      ],
      [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      [
        [0, 2],
        [1, 1],
        [2, 0],
      ],
    ];

    for (const combination of winningCombinations) {
      const [x, y] = combination[0];
      const [x2, y2] = combination[1];
      const [x3, y3] = combination[2];
      if (
        board[x][y] === userName &&
        board[x2][y2] === userName &&
        board[x3][y3] === userName
      ) {
        return true;
      }
    }
    return false;
  }
}
