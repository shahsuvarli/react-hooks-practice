import React, { useState, useEffect, useId, useLayoutEffect } from "react";

function Child(props) {
  const [showPanel, setShowPanel] = useState(true);
  const id = useId();
  const [deyer, setDeyer] = useState(0);

  
  useLayoutEffect(() => {
    console.log("useLayout");
    return ()=>{
      console.log('uselayout unmount')
    }
  }, [showPanel]);


  useEffect(() => {
    console.log("useffect");
  }, [showPanel]);


  useEffect(() => {
    return () => {
      console.log("useeffect unmount");
    };
  }, [deyer]);


  return (
    console.log("return"),
    console.log(deyer),
    (
      <div>
        <h1>Child count: {props.count}</h1>
        {showPanel && (
          <div
            style={{
              width: "120px",
              height: "70px",
              backgroundColor: "dodgerblue",
              color: "white",
            }}
          >
            Hello World! {id}
          </div>
        )}
        <button onClick={() => setShowPanel((prev) => !prev)}>showPanel</button>
      </div>
    )
  );
}

export default React.memo(Child);
