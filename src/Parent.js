import React, { useRef, useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [value, setValue] = useState(0);

  const inRef = useRef();

  return (
    <div>
      <Child count={500} />
      {value}
      <button onClick={() => setValue((value) => value + 1)}>click me</button>
      <input ref={inRef} type="text" placeholder="Name" name="name" />
      <button onClick={() => console.log(inRef.current.value)}>submit</button>
    </div>
  );
}
