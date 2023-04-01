import React, { useState } from 'react';
import { Header } from './Components/Header';
import { NoteForm } from './Components/NoteForm';
import { NoteList } from './Components/NoteList';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (noteText) => {
    const newNote = {
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

  return (
    <div className="App">
      <Header />
      <main>
        <NoteForm addNote={addNote} />
        <NoteList notes={notes} deleteNote={deleteNote} />
      </main>
    </div>
  );
};

export default App;
