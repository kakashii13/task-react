import React from "react";
import "../Style/CreateButton.css";

function CreateButton({ setOpenModal }) {
  return (
    <button onClick={() => setOpenModal(true)} className="CreateButton">
      +
    </button>
  );
}

export { CreateButton };
