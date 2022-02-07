import React from "react";
import "../Style/TodoItem.css";

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={() => onComplete(text)}
      >
        ✓
      </span>
      <p className="Text">{text}</p>
      <span className="Icon Icon-delete" onClick={() => onDelete(text)}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
