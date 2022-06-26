import React from "react";

function Child(props) {
  console.log(props);
  return <div>Child count: {props.count}</div>;
}

export default React.memo(Child);
