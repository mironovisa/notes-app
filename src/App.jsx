//I didn't quite understood where should we show the link for the milesone 7, so i have it here https://643a52a582aa910008679211--clinquant-piroshki-e365f0.netlify.app/


import React, { useState, useEffect } from "react";
import { Header } from "./Components/Header";
import { NoteForm } from "./Components/NoteForm";
import { NoteList } from "./Components/NoteList";
import { NoteModal } from "./Components/NoteModal";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem("notes");
    return storedNotes ? JSON.parse(storedNotes) : [];
  });
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
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, text, title, updatedDate: new Date() };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    console.log("Notes saved:", JSON.stringify(notes));
  }, [notes]);

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
        <div style={{ marginTop: "2rem" }}></div>
      </main>
    </div>
  );
};

export default App;
