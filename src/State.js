import { useState } from "react";
import CustomHook from "./CustomHook";
import Memo from "./Memo";
import Parent from "./Parent";
import ReducerApp from "./ReducerApp";

const State = () => {
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
      <hr />
      <Memo />
      <hr />
      <CustomHook />
      <Parent />
      <ReducerApp />
    </div>
  );
};

export default State;
