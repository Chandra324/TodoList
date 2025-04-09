import React from "react";

function TodoItem({ task, onDelete }) {
  return (
    <li style={{ marginTop: "10px" }}>
      {task}
      <button onClick={onDelete} style={{ marginLeft: "10px" }}>Delete</button>
    </li>
  );
}

export default TodoItem;
