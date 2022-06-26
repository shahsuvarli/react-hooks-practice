import React, { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <Child count={500} />
      {value}
      <button onClick={() => setValue((value) => value + 1)}>click me</button>
    </div>
  );
}
