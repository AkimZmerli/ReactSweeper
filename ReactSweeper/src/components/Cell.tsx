// src/components/Cell.tsx
import React from "react";
import { Cell as CellType } from "../types/types";

type CellProps = {
  cell: CellType;
  onClick: () => void;
  onRightClick: (event: React.MouseEvent) => void;
};

export const Cell: React.FC<CellProps> = ({ cell, onClick, onRightClick }) => {
  const renderCellContent = () => {
    if (cell.isRevealed) {
      if (cell.isBomb) return "💣";
      return cell.adjacentBombs > 0 ? cell.adjacentBombs : "";
    } else if (cell.isFlagged) {
      return "🚩";
    }
    return null;
  };

  return (
    <div
      className={`w-8 h-8 border flex items-center justify-center text-xl cursor-pointer ${
        cell.isRevealed ? "bg-gray-200" : "bg-gray-100"
      }`}
      onClick={onClick}
      onContextMenu={onRightClick}
    >
      {renderCellContent()}
    </div>
  );
};
