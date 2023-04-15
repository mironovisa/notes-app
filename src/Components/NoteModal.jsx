import React, { useState } from 'react';
import Modal from 'react-modal';
import { NoteEditForm } from '../Components/NoteFormEdit'
import Addbutton from '../UI/Kits/Buttons/Addbutton';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    top: '10%',
    left: '10%',
    right: '10%',
    bottom: '10%',
    padding: '0',
    border: 'none',
    borderRadius: '10px',
    backgroundColor: '#282c34',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
    animation: 'fade-in 0.3s ease-in-out',
    overflow: 'hidden'
  },
  closeButton: {
    position: 'absolute',
    top: '0',
    right: '0',
    fontSize: '20px',
    color: '#a23dff',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '10px',
  },
  noteTitle: {
    color: '#fff',
    margin: '20px',
    fontSize: '20px',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  noteText: {
    color: '#fff',
    margin: '20px',
    fontSize: '16px',
    whiteSpace: 'pre-wrap',
  },
  noteDate: {
    color: '#bbb',
    margin: '20px',
    fontSize: '12px',
  }
};

Modal.setAppElement('#root');

export const NoteModal = ({ note, isOpen, onRequestClose, updateNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdate = (updatedText, updatedTitle) => {
    updateNote(note.id, updatedText, updatedTitle);
    setTitle(updatedTitle);
    setText(updatedText);
    setIsEditing(false);
  };

  const handleClose = () => {
    setTitle(note.title);
    setText(note.text);
    setIsEditing(false);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="Note Modal"
      style={customStyles}
    >
      {isEditing ? (
        <NoteEditForm 
          onSubmit={handleUpdate}
          initialText={text}
          initialTitle={title}
        />
      ) : (
        <>
          <h3 className="note-title" style={customStyles.noteTitle}>
            {title}
          </h3>
          <p className="note-text" style={customStyles.noteText}>
            {text}
          </p>
          <p className="note-date" style={customStyles.noteDate}>
            Created:{" "}
            {note.date.toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
            {note.updatedDate && (
              <>
                <br />
                Updated:{" "}
                {note.updatedDate.toLocaleString("en-US", {
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </>
            )}
          </p>
          <Addbutton text="Edit" onClick={handleEditClick}>
          </Addbutton>
        </>
      )}
    </Modal>
  );
};