import React, { useRef } from "react";

function InputFocus() {
    // useRef to get reference of the input element
    const inputRef = useRef(null);
    // Function to focus the input element when button is clicked
    const handleClick = () => {
        if(inputRef.current) {
            inputRef.current.focus();
        }
    }
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <input
        type="text"
        // inputRef is attached to the input element
        ref={inputRef}
        placeholder="Type here"
        style={{ padding: "8px", fontSize: "16px", marginRight: "10px" }}
      />
      <button onClick={handleClick} style={{ padding: "8px 12px" }}>Focus Input</button>
    </div>
  );
}

export default InputFocus;
