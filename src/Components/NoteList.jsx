import React from "react";
import { Note } from "./Note";
import "../Styles/NoteList.css";

export const NoteList = ({ notes, deleteNote }) => {
  return (
    <div className="note-list">
      {notes.map((note, index) => (
        <Note key={index} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
};
