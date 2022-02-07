import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodo() {
  const {
    item: todos,
    saveItem: setTodos,
    loading,
  } = useLocalStorage("TODOS_V1", []);
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  // completeTodo

  const onComplete = (text) => {
    const index = todos.findIndex((todo) => todo.text === text);
    const newTodo = [...todos];
    newTodo[index].completed = true;
    setTodos(newTodo);
  };

  // deleteTodo

  const onDelete = (text) => {
    const index = todos.findIndex((todo) => todo.text === text);
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };

  // addTodo

  const addTodo = (text) => {
    const newTodo = [...todos];
    if (!text) {
      console.error("error");
    } else {
      newTodo.push({
        text,
        completed: false,
      });
    }
    setTodos(newTodo);
  };

  return {
    completedTodos,
    totalTodos,
    todos,
    onDelete,
    onComplete,
    openModal,
    setOpenModal,
    addTodo,
    loading,
  };
}

export { useTodo };
