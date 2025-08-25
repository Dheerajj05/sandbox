import React, { useState } from "react";
import '../App.css'
function ChipsInput() {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const handleInput = (e) => {
    setInput(e.target.value);
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (input.trim() !== '') {
        if (!data.includes(input)) {
          setData((prev) => [...prev, input]);
        }
      }
      setInput('');
    }
  }

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