import React, { useState } from "react";

import './_collapse.scss';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="collapse_container">
      <div className="collapse_header" onClick={toggleCollapse}>
        <h2 className="collapse_title">{title}</h2>
        <p className="collapse_toggle">
          {isOpen ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </p>
      </div>
      <div className={`collapse_content ${isOpen ? 'open transition' : 'closed transition'}`}>
        {isOpen && <p className="collapse_text">{content}</p>}
      </div>
    </div>
  );
};
  
  export default Collapse;