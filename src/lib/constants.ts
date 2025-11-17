import { TetrominoType } from './types';

export const GRID_ROWS = 20;
export const GRID_COLS = 10;

export const SPAWN_POSITION = { x: 3, y: 0 };

export const BASE_FALL_SPEED = 1000; // ms
export const MIN_FALL_SPEED = 100;   // ms
export const SPEED_DECREASE_PER_LEVEL = 50;

export const LOCK_DELAY = 500; // ms
export const MAX_LOCK_RESETS = 15;

export const LINES_PER_LEVEL = 10;

// DAS (Delayed Auto Shift) settings
export const DAS_INITIAL_DELAY = 170; // ms before auto-repeat
export const DAS_REPEAT_RATE = 50;    // ms between repeats

// Cell type values for board matrix
export const CELL_EMPTY = 0;
export const CELL_I = 1;
export const CELL_O = 2;
export const CELL_T = 3;
export const CELL_S = 4;
export const CELL_Z = 5;
export const CELL_J = 6;
export const CELL_L = 7;

// Ghost piece type values (add 10 to base type)
export const CELL_GHOST_I = 11;
export const CELL_GHOST_O = 12;
export const CELL_GHOST_T = 13;
export const CELL_GHOST_S = 14;
export const CELL_GHOST_Z = 15;
export const CELL_GHOST_J = 16;
export const CELL_GHOST_L = 17;

// Maps piece type to cell type value
export const PIECE_TO_CELL: Record<TetrominoType, number> = {
  I: CELL_I,
  O: CELL_O,
  T: CELL_T,
  S: CELL_S,
  Z: CELL_Z,
  J: CELL_J,
  L: CELL_L,
};

// Maps piece type to ghost cell type value
export const PIECE_TO_GHOST_CELL: Record<TetrominoType, number> = {
  I: CELL_GHOST_I,
  O: CELL_GHOST_O,
  T: CELL_GHOST_T,
  S: CELL_GHOST_S,
  Z: CELL_GHOST_Z,
  J: CELL_GHOST_J,
  L: CELL_GHOST_L,
};

// Colors for rendering
export const CELL_COLORS: Record<number, string> = {
  0: 'transparent',
  1: '#00F0F0',  // I - cyan
  2: '#F0F000',  // O - yellow
  3: '#A000F0',  // T - purple
  4: '#00F000',  // S - green
  5: '#F00000',  // Z - red
  6: '#0000F0',  // J - blue
  7: '#F0A000',  // L - orange
  // Ghost pieces (same colors for border)
  11: '#00F0F0', // ghost I
  12: '#F0F000', // ghost O
  13: '#A000F0', // ghost T
  14: '#00F000', // ghost S
  15: '#F00000', // ghost Z
  16: '#0000F0', // ghost J
  17: '#F0A000', // ghost L
};

// Helper to check if cell type is a ghost
export const isGhostType = (type: number): boolean => type >= 11 && type <= 17;
