import { useState } from "react";

import { CreateBoard } from "./components/board";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CreateBoard />
    </>
  );
}

export default App;
