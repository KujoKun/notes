import React from "react";

const Header = ({ onDarkModeChange }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() => onDarkModeChange((prevState) => !prevState)}
        className="save"
      >
        Toggle mode
      </button>
    </div>
  );
};

export default Header;
