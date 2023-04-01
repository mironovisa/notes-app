import React from 'react';

export const Note = ({ note, deleteNote }) => {
  const handleDeleteClick = () => {
    deleteNote(note.id);
  };

  return (
    <div className="note">
      <p className="note-text">{note.text}</p>
      <p className="note-date">
        {note.date.toLocaleString('en-US', {
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        })}
      </p>
      <button className="delete-btn" onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  );
};
