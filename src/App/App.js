import "../Style/App.css";
import React from "react";
import { TodoCounter } from "../Components/TodoCounter.js";
import { TodoSearch } from "../Components/TodoSearch.js";
import { TodoList } from "../Components/TodoList.js";
import { TodoItem } from "../Components/TodoItem.js";
import { CreateButton } from "../Components/CreateButton.js";
import { useTodo } from "./useTodo.js";
import { Modal } from "../Modal";
import { TodoForm } from "../Components/TodoForm.js";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function App() {
  const {
    todos,
    totalTodos,
    completedTodos,
    onDelete,
    onComplete,
    openModal,
    setOpenModal,
    addTodo,
    loading,
  } = useTodo();

  return (
    <>
      <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
      <TodoList>
        {loading && <Skeleton width={300} height={30} />}
        {todos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))}
      </TodoList>
      <CreateButton setOpenModal={setOpenModal} />
      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
    </>
  );
}

export default App;
