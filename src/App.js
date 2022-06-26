import { useState } from "react";
import "./App.css";
import Parent from "./Parent";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <Parent />
    </div>
  );
}

export default App;
