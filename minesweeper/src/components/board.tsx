import { Cell } from "./cell";

const rows = 16;
const columns = 16;
const chars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
];

import React, { useState } from "react";
import { Cell } from "./Cell";

const rows = 10;
const columns = 10;

const Board = () => {
  const [grid, setGrid] = useState(initializeGrid(rows, columns));

  const handleCellClick = (row: number, col: number) => {
    // Handle cell click logic here
  };

  const handleCellRightClick = (
    event: React.MouseEvent,
    row: number,
    col: number
  ) => {
    event.preventDefault();
    // Handle cell right-click logic here
  };

  return (
    <div>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex" }}>
          {row.map((cell, colIndex) => (
            <Cell
              key={cell.id}
              id={cell.id}
              isFlagged={cell.isFlagged}
              isBomb={cell.isBomb}
              isRevealed={cell.isRevealed}
              adjacentBombs={cell.adjacentBombs}
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

const Board = () => {
  const [grid, setGrid] = useState(initializeGrid(rows, columns));

  const handleCellClick = (row: number, col: number) => {
    // Handle cell click logic here
  };

  const handleCellRightClick = (
    event: React.MouseEvent,
    row: number,
    col: number
  ) => {
    event.preventDefault();
    // Handle cell right-click logic here
  };

  return (
    <div>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex" }}>
          {row.map((cell, colIndex) => (
            <Cell
              key={cell.id}
              id={cell.id}
              isFlagged={cell.isFlagged}
              isBomb={cell.isBomb}
              isRevealed={cell.isRevealed}
              adjacentBombs={cell.adjacentBombs}
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

// You would also need to define the initializeGrid function and import React
import React, { useState } from "react";
import { Cell } from "./Cell";

const rows = 10;
const columns = 10;

const Board = () => {
  const [grid, setGrid] = useState(initializeGrid(rows, columns));

  const handleCellClick = (row: number, col: number) => {
    // Handle cell click logic here
  };

  const handleCellRightClick = (
    event: React.MouseEvent,
    row: number,
    col: number
  ) => {
    event.preventDefault();
    // Handle cell right-click logic here
  };

  return (
    <div>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex" }}>
          {row.map((cell, colIndex) => (
            <Cell
              key={cell.id}
              id={cell.id}
              isFlagged={cell.isFlagged}
              isBomb={cell.isBomb}
              isRevealed={cell.isRevealed}
              adjacentBombs={cell.adjacentBombs}
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

// You would also need to define the initializeGrid function and import React
import React, { useState } from "react";
import { Cell } from "./Cell";

const rows = 10;
const columns = 10;

const Board = () => {
  const [grid, setGrid] = useState(initializeGrid(rows, columns));

  const handleCellClick = (row: number, col: number) => {
    // Handle cell click logic here
  };

  const handleCellRightClick = (
    event: React.MouseEvent,
    row: number,
    col: number
  ) => {
    event.preventDefault();
    // Handle cell right-click logic here
  };

  return (
    <div>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex" }}>
          {row.map((cell, colIndex) => (
            <Cell
              key={cell.id}
              id={cell.id}
              isFlagged={cell.isFlagged}
              isBomb={cell.isBomb}
              isRevealed={cell.isRevealed}
              adjacentBombs={cell.adjacentBombs}
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

// You would also need to define the initializeGrid function and import React
