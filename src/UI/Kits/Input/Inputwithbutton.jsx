import React, { useState } from 'react';
import './Inputwithbutton.css';

export const InputWithAddButton = ({ onAddNote }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddNote({
        text: text.trim(),
        date: new Date(),
        id: Date.now(),
      });
      setText('');
    }
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="input-with-add-button">
      <input
        type="text"
        placeholder="Add Note"
        value={text}
        onChange={handleInputChange}
        className="input"
      />
      <button type="submit" className="add-btn">
        Add
      </button>
    </form>
  );
};