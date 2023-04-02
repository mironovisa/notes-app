import React from 'react';
import Modal from 'react-modal';

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

export const NoteModal = ({ note, isOpen, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Note Modal" style={customStyles}>
      <button onClick={onRequestClose} style={customStyles.closeButton}>x</button>
      <div>
        <h2 style={customStyles.noteTitle}>{note.title}</h2>
        <p style={customStyles.noteText}>{note.text}</p>
        <p style={customStyles.noteDate}>Date: {note.date.toLocaleString()}</p>
      </div>
    </Modal>
  );
};
