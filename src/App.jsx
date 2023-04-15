import React, { useState } from "react";
import { Header } from "./Components/Header";
import { NoteForm } from "./Components/NoteForm";
import { NoteList } from "./Components/NoteList";
import { NoteModal } from "./Components/NoteModal";
import "./App.css";
import { Tumbler } from "./UI/Kits/Tumbler/Tumbler";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  const addNote = (text, title) => {
    const newNote = {
      id: Date.now(),
      text: text,
      title: title,
      date: new Date(),
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    if (window.confirm("Are you sure you want to delete your note?")) {
      const filteredNotes = notes.filter((note) => note.id !== id);
      setNotes(filteredNotes);
    }
  };

  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };
  const handleModalClose = () => {
    setSelectedNote(null);
  };
  const updateNote = (id, text, title) => {
    const updatedNotes = notes.map(note => {
      if (note.id === id) {
        return { ...note, text, title, updatedDate: new Date() };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <NoteForm addNote={(text, title) => addNote(text, title)} />
        <NoteList
          notes={notes}
          deleteNote={deleteNote}
          onNoteClick={handleNoteClick}
        />
        {selectedNote && (
          <NoteModal
            note={selectedNote}
            isOpen={true}
            onRequestClose={handleModalClose}
            updateNote={updateNote}
          />
        )}
        <div style={{ marginTop: "2rem" }}>
          
        </div>
      </main>
    </div>
  );
};

export default App;
