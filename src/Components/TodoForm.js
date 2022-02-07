import React, { useState } from "react";
import "../Style/TodoForm.css";

function TodoForm({
  setOpenModal,
  addTodo,
  setCreateAlert,
  setCreateAlertText,
  setAlertStyle,
}) {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(value);
    setOpenModal(false);
    setCreateAlert(true);
    setCreateAlertText("Has creado una tarea");
    setAlertStyle("success");
    setTimeout(() => {
      setCreateAlert(false);
      setCreateAlertText("");
    }, 2000);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <textarea
        autoFocus
        placeholder="Crea una tarea"
        className="Text-area"
        onChange={onChange}
        value={value}
      />
      <div className="Button-container">
        <button
          className="Button Button-cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button className="Button Button-add" type="submit">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
