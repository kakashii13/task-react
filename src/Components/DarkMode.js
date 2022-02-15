import React, { useState, useEffect } from "react";
import "../Style/DarkMode.css";

function DarkMode({ darkMode, setDarkMode, newDarkMode }) {
  return (
    <div className="DarkMode">
      <img
        onClick={() => newDarkMode((prevState) => !prevState)}
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
