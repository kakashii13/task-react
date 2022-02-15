import React, { useEffect } from "react";
import "../Style/App.css";
import { TodoCounter } from "../Components/TodoCounter.js";
import { TodoSearch } from "../Components/TodoSearch.js";
import { TodoList } from "../Components/TodoList.js";
import { TodoItem } from "../Components/TodoItem.js";
import { CreateButton } from "../Components/CreateButton.js";
import { useTodo } from "./useTodo.js";
import { Modal } from "../Modal";
import { TodoForm } from "../Components/TodoForm.js";
import { Loading } from "../Components/Loading.js";
import { CreateAlert } from "../Components/CreateAlert.js";
import { DarkMode } from "../Components/DarkMode.js";
import "react-loading-skeleton/dist/skeleton.css";

function AppUI() {
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
    createAlert,
    setCreateAlert,
    createAlertText,
    setCreateAlertText,
    alertStyle,
    setAlertStyle,
    darkMode,
    setDarkMode,
    newDarkMode,
  } = useTodo();

  return (
    <div className={`App ${darkMode && "App-dark"}`}>
      <DarkMode
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        newDarkMode={newDarkMode}
      />

      {createAlert && (
        <CreateAlert
          createAlertText={createAlertText}
          alertStyle={alertStyle}
        />
      )}
      <TodoCounter
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        loading={loading}
      />
      <TodoList>
        {loading && <Loading />}
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
      <CreateButton setOpenModal={setOpenModal} loading={loading} />
      {openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
            setCreateAlert={setCreateAlert}
            setCreateAlertText={setCreateAlertText}
            setAlertStyle={setAlertStyle}
          />
        </Modal>
      )}
    </div>
  );
}

export { AppUI };
