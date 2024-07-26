// src/types/types.ts
export type Cell = {
  id: string;
  isFlagged: boolean;
  isBomb: boolean;
  isRevealed: boolean;
  adjacentBombs: number;
};

export type Grid = Cell[][];
