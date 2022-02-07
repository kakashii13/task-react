import React from "react";
import "../Style/CreateAlert.css";

function CreateAlert({ createAlertText, alertStyle }) {
  return (
    <p
      className={`CreateAlert ${
        (alertStyle == "delete" && "CreateAlert-delete") ||
        (alertStyle == "success" && "CreateAlert-succes")
      }`}
    >
      {createAlertText}
    </p>
  );
}

export { CreateAlert };
