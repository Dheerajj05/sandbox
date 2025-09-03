import React, { useState } from "react";
import '../App.css'
function ChipsInput() {
  // State to hold the input value and the list of chips
  const [input, setInput] = useState('');
  // Array to hold the chips
  const [data, setData] = useState([]);
  // Function to handle input change and key press events
  const handleInput = (e) => {
    setInput(e.target.value);
  }
  // Function to handle key down event
  const handleKeyDown = (e) => {
    // Check if the pressed key is 'Enter'
    if (e.key === 'Enter') {
      // Add the input value to the chips array if it's not empty and not a duplicate
      if (input.trim() !== '') {
        if (!data.includes(input)) {
          setData((prev) => [...prev, input]);
        }
      }
      setInput('');
    }
  }
// Function to remove a chip from the list
  const handleRemove = (item) => {
    setData((prev)=> prev.filter((chip)=>chip != item))
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "40px 0" }}>
      <h2>Chips Input</h2>
      <input
        type="text"
        value={input}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
      />
      <div className="chips-container" >
        {
          // Render each chip with a remove button
          data?.map((item, index) => (
            <div key={index} className="chips-container_item">
              <div> {item} </div>
             <button className="cancel-btn" onClick={()=>handleRemove(item)}>X</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default ChipsInput;