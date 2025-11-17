import { Board } from '@/lib/types';
import { GRID_ROWS, GRID_COLS, CELL_COLORS, isGhostType } from '@/lib/constants';
import './Grid.css';

interface GridProps {
  board: Board;
}

export function Grid({ board }: GridProps) {
  return (
    <div className="grid">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((cell, colIndex) => {
            const isGhost = isGhostType(cell.type);
            const color = CELL_COLORS[cell.type];

            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`grid-cell ${isGhost ? 'grid-cell--ghost' : ''} ${cell.type !== 0 ? 'grid-cell--filled' : ''}`}
                style={{
                  backgroundColor: isGhost ? 'transparent' : color,
                  borderColor: isGhost ? color : '#1e293b',
                }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

// Helper to create an empty board
export function createEmptyBoard(): Board {
  return Array(GRID_ROWS)
    .fill(null)
    .map(() =>
      Array(GRID_COLS)
        .fill(null)
        .map(() => ({ type: 0, state: 'empty' as const }))
    );
}
