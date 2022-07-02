import React, { useEffect, useRef, useState } from "react";
import Child from "./Child";
// import Test from "./Test";

export default function Parent() {
  const [value, setValue] = useState(0);
  const [show, setShow] = useState(true);

  const inRef = useRef();


  return (
    <div>
      {show && <Child count={value} />}
      {/* <Test count={value} /> */}
      {value}
      <button
        onClick={() => setValue((value) => (value === 5 ? value : value + 1))}
      >
        click me
      </button>
      <input ref={inRef} type="text" placeholder="Name" name="name" />
      <button onClick={() => console.log(inRef.current.value)}>submit</button>
      <button onClick={() => setShow((prev) => !prev)}>shoooww child</button>
    </div>
  );
}
