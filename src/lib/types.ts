export type TetrominoType = 'I' | 'O' | 'T' | 'S' | 'Z' | 'J' | 'L';

export type CellState = 'empty' | 'locked' | 'active';

export interface Cell {
  type: number;      // 0 = empty, 1-7 = piece types, 11-17 = ghost types
  state: CellState;
}

export interface PieceState {
  type: TetrominoType;
  rotation: number; // 0, 1, 2, or 3
  x: number;        // Column (0-9)
  y: number;        // Row (0-19)
}

export type Board = Cell[][]; // 20x10 grid of Cell objects

export type GameStatus = 'idle' | 'playing' | 'game_over';

export interface GameState {
  board: Board;
  currentPiece: PieceState | null;
  nextPiece: TetrominoType;
  score: number;
  level: number;
  linesCleared: number;
  gameStatus: GameStatus;
}
