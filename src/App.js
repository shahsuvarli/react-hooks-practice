import { useState } from "react";
import "./App.css";
import Parent from "./Parent";
import ReducerApp from "./ReducerApp";

function App() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div className="App">
      <h1>{count}</h1>
      <button
        onClick={() =>
          setCount((prevCount) => (prevCount <= 0 ? 0 : prevCount - 1))
        }
      >
        decrease
      </button>
      <button onClick={handleCount}>increase</button>
      <Parent />
      <ReducerApp/>
    </div>
  );
}

export default App;
