import React, { useState } from "react";
import { NoteForm } from "./Components/NoteForm"
import { NoteList } from "./Components/NoteList";
import "./App.css";
import { Header } from "./Components/Header";

export const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (text) => {
    const newNote = {
      text: text,
      date: new Date().toLocaleDateString(),
    };
    setNotes([...notes, newNote]);
  };

  return (
    <div className="App">

      <main>
        <section className="form-section">
          <NoteForm addNote={addNote} />
        </section>
        <section className="notes-section">
          <NoteList notes={notes} />
        </section>
      </main>
    </div>
  );
};

export default App;