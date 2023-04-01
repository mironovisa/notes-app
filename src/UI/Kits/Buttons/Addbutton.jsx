import React from 'react';
import './Addbutton.css';

const Addbutton = ({ onClick }) => {
  return (
    <button type="submit" onClick={onClick}>Add
      <div className="plus-icon"></div>
    </button>
  );
};

export default Addbutton;
