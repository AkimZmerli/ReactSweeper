// src/utils/initializeGrid.ts
import { Grid } from "../types/types";

const chars = "abcdefghijklmnopqrstuvwxyz".split("");

export const initializeGrid = (rows: number, columns: number): Grid => {
  const grid: Grid = [];

  for (let row = 0; row < rows; row++) {
    const currentRow = [];
    for (let col = 0; col < columns; col++) {
      const cellId = `${chars[row]}${col}`;
      currentRow.push({
        id: cellId,
        isFlagged: false,
        isBomb: false,
        isRevealed: false,
        adjacentBombs: 0,
      });
    }
    grid.push(currentRow);
  }

  return grid;
};
