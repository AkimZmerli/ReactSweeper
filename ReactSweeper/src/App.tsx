// src/App.tsx
import React from "react";
import { Board } from "./components/Board";
import "./index.css";

function App() {
  return (
    <div className="text-center flex flex-col items-center">
      <h1 className="text-2xl font-bold my-4">Minesweeper</h1>
      <Board />
    </div>
  );
}

export default App;
