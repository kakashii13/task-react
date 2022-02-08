import React, { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodo() {
  const {
    item: todos,
    saveItem: setTodos,
    loading,
  } = useLocalStorage("TODOS_V1", []);
  const [openModal, setOpenModal] = useState(false);
  const [createAlert, setCreateAlert] = useState(false);
  const [createAlertText, setCreateAlertText] = useState("");
  const [alertStyle, setAlertStyle] = useState(undefined);
  const [darkMode, setDarkMode] = useState(false);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  // completeTodo

  const onComplete = (text) => {
    const index = todos.findIndex((todo) => todo.text === text);
    const newTodo = [...todos];
    newTodo[index].completed = true;
    setTodos(newTodo);
    setCreateAlert(true);
    setCreateAlertText("Has completado una tarea");
    setAlertStyle("success");
    setTimeout(() => {
      setCreateAlertText("");
      setCreateAlert(false);
    }, 2000);
  };

  // deleteTodo

  const onDelete = (text) => {
    const index = todos.findIndex((todo) => todo.text === text);
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
    setCreateAlert(true);
    setCreateAlertText("Has eliminado una tarea");
    setAlertStyle("delete");
    setTimeout(() => {
      setCreateAlertText("");
      setCreateAlert(false);
    }, 2000);
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

  // darkmode

  const darkModeStyle = () => {};

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
    createAlert,
    setCreateAlert,
    createAlertText,
    setCreateAlertText,
    alertStyle,
    setAlertStyle,
    darkMode,
    setDarkMode,
  };
}

export { useTodo };
