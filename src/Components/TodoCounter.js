import React from "react";
import "../Style/TodoCounter.css";

function TodoCounter({ completedTodos, totalTodos, loading }) {
  return (
    <h1
      className={`Title ${loading && "Loading-Counter"}`}
    >{`Has completado ${completedTodos} de ${totalTodos}`}</h1>
  );
}

export { TodoCounter };
