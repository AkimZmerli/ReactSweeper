import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { CreateBoard } from "./components/board.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
