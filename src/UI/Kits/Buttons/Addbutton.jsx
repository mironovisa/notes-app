import React from 'react';
import './Addbutton.css';

const Addbutton = ({ onClick, text }) => {
  return (
    <button type="submit" onClick={onClick}>
      {text}
      <div className="plus-icon"></div>
    </button>
  );
};

export default Addbutton;
