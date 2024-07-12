import React from "react";

interface Cell {
  id: string;
  isFlagged: boolean;
  isBomb: boolean;
  isRevealed: boolean;
  adjacentBombs: number;
  onClick: () => void;
  onRightClick: (event: React.MouseEvent) => void;
}

export function Cell({
  id,
  isFlagged,
  isBomb,
  isRevealed,
  adjacentBombs,
  onClick,
  onRightClick,
}: Cell) {
  const renderCellContent = () => {
    if (isRevealed) {
      if (isBomb) {
        return "💣"; // Bomb
      }
      return adjacentBombs > 0 ? adjacentBombs : ""; // Number of adjacent bombs
    } else if (isFlagged) {
      return "🚩"; // Flag
    }
    return null;
  };

  return (
    <div
      id={id}
      className={`cell ${isRevealed ? "revealed" : ""}`}
      onClick={onClick}
      onContextMenu={onRightClick} // Right-click event for flagging
    >
      {renderCellContent()}
    </div>
  );
}
