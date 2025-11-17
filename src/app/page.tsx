'use client';

import { Grid, createEmptyBoard } from '@/components/Grid/Grid';

export default function Home() {
  const board = createEmptyBoard();

  return (
    <main className="main">
      <h1>Bizarre Tetris</h1>
      <Grid board={board} />
    </main>
  );
}
