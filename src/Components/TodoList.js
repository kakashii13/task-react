import React from "react";
import "../Style/TodoList.css";

function TodoList({ children }) {
  return (
    <section>
      <ul className="TodoList">{children}</ul>
    </section>
  );
}

export { TodoList };
