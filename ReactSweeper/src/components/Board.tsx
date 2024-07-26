// src/components/Board.tsx
import React, { useState } from "react";
import { Cell } from "./Cell";
import { initializeGrid } from "../utils/initializeGrid";
import { Grid } from "../types/types";

const rows = 10;
const columns = 10;

export const Board: React.FC = () => {
  const [grid, setGrid] = useState<Grid>(initializeGrid(rows, columns));

  const handleCellClick = (row: number, col: number) => {
    const newGrid = grid.map((gridRow, rowIndex) =>
      gridRow.map((cell, colIndex) => {
        if (rowIndex === row && colIndex === col) {
          return { ...cell, isRevealed: true };
        }
        return cell;
      })
    );
    setGrid(newGrid);
  };

  const handleCellRightClick = (
    event: React.MouseEvent,
    row: number,
    col: number
  ) => {
    event.preventDefault();
    const newGrid = grid.map((gridRow, rowIndex) =>
      gridRow.map((cell, colIndex) => {
        if (rowIndex === row && colIndex === col) {
          return { ...cell, isFlagged: !cell.isFlagged };
        }
        return cell;
      })
    );
    setGrid(newGrid);
  };

  return (
    <div className="inline-block">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((cell, colIndex) => (
            <Cell
              key={cell.id}
              cell={cell}
              onClick={() => handleCellClick(rowIndex, colIndex)}
              onRightClick={(event) =>
                handleCellRightClick(event, rowIndex, colIndex)
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
};
