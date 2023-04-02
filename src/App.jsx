import React, { useState } from 'react';
import { Header } from './Components/Header';
import { NoteForm } from './Components/NoteForm';
import { NoteList } from './Components/NoteList';
import { NoteModal } from './Components/NoteModal';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  const addNote = (noteText) => {
    const newNote = {
      title: "Note",
      text: noteText,
      date: new Date(),
      id: Date.now(),
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    if (window.confirm('Are you sure you want to delete your note?')) {
      const filteredNotes = notes.filter((note) => note.id !== id);
      setNotes(filteredNotes);
    }
  };

  const handleNoteClick = (note) => {
    setSelectedNote(note);
  }
  const handleModalClose = () => {
    setSelectedNote(null);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <NoteForm addNote={addNote} />
        <NoteList notes={notes} deleteNote={deleteNote} onNoteClick={handleNoteClick} />
        {selectedNote && (<NoteModal note={selectedNote} isOpen={true} onRequestClose={handleModalClose} />)}
      </main>
    </div>
  );
};

export default App;
