import React, { useState, useEffect } from "react";

function Child(props) {
  const [showPanel, setShowPanel] = useState(true);
  useEffect(() => {
    console.log("Component hazirlandi!");
  }, [showPanel]);
  return (
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
          Hello World!
        </div>
      )}
      <button onClick={() => setShowPanel((prev) => !prev)}>showPanel</button>
    </div>
  );
}

export default React.memo(Child);
