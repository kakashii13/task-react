import React, { useState, useEffect } from "react";
import "../Style/DarkMode.css";

function DarkMode({ darkMode, setDarkMode }) {
  const onClick = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <div className="DarkMode">
      <img
        onClick={onClick}
        src={`${
          (!darkMode &&
            "https://icongr.am/fontawesome/toggle-off.svg?size=30&color=currentColor") ||
          "https://icongr.am/fontawesome/toggle-on.svg?size=30&color=cccccc"
        }`}
      />
    </div>
  );
}

export { DarkMode };
