import React from "react";
import "./styles.css";

const TextInput = ({ searchValue, handleChange }) => {
  return (
    <>
      <input
        className="text-input"
        value={searchValue}
        onChange={handleChange}
        type="search"
        placeholder="Type your search"
      />
    </>
  );
};

export default TextInput;
