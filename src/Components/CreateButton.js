import React, { useState } from "react";
import "../Style/CreateButton.css";

function CreateButton({ setOpenModal, loading }) {
  return (
    <button
      onClick={() => setOpenModal(true)}
      className={`CreateButton ${loading && "CreateButton-loading"}`}
      disabled={loading && true}
    >
      +
    </button>
  );
}

export { CreateButton };
