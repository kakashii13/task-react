import React from "react";

function TodoCounter({ completedTodos, totalTodos }) {
  return <h1>{`Has completado ${completedTodos} de ${totalTodos}`}</h1>;
}

export { TodoCounter };
