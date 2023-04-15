import React from 'react';

export const Note = ({ note, deleteNote, onNoteClick }) => {
  const handleDeleteClick = (e) => {
    e.stopPropagation();
    deleteNote(note.id);
  };

  const handleNoteClick = () => {
    onNoteClick(note);
  };

  return (
    <div className="note" onClick={handleNoteClick}>
      <h3 className='note-title'>{note.title}</h3>
      <p className="note-text">{note.text}</p>
      <p className="note-date">
        Created: {note.date.toLocaleString('en-US', {
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        })}
        {note.updatedDate && (
          <>
            <br />
            Updated: {note.updatedDate.toLocaleString('en-US', {
              month: 'short',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
            })}
          </>
        )}
      </p>
      <button className="delete-btn" onClick={(e) => handleDeleteClick(e)}>
        Delete
      </button>
    </div>
  );
};
