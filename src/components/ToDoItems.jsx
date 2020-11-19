import React, { useState } from "react";

function ToDoItems(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone((prevValue) => !isDone);
  }

  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.item}
      </li>
    </div>
  );
}

export default ToDoItems;
