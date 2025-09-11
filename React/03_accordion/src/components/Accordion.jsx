import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; 
import '../App.css'

function Accordion({ items }) {
    const [activeTab, setActiveTab] = useState(null);
    const handleToggle = (index) => {
        setActiveTab(activeTab === index ? null : index);
    }
    if(items.length === 0) return <p>No items Available</p>;
    return (
        <div className="accordion" style={{color: "black"}}>
            {items.map((item, index) => (
                <div>
                <button
                    type="button"
                    onClick={()=>handleToggle(index)}
                    className="accordion-title">{item.title}
                    {activeTab ===index?<FaChevronUp style={{float: "right"}} />: <FaChevronDown style={{float: "right"}} />}
                    </button>
                    {activeTab === index && (
                        <div className="accordion-content">{item.content}</div>
                    )}
                </div>
                
        ))}

        </div>
    );
}

export default Accordion;