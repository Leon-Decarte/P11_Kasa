import React, { useState } from 'react';
import vectorIcon from '../../assets/Vector.png';
import './Dropdown.css';

export default function Dropdown({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={() => setOpen(!open)}>
        <h3>{title}</h3>
        <img
          src={vectorIcon}
          alt="toggle"
          className={`dropdown-arrow ${open ? 'rotated' : ''}`}
        />
      </div>
      {open && <div className="dropdown-content">{children}</div>}
    </div>
  );
}
