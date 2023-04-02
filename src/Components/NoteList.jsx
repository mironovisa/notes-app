import React from "react";
import { Note } from "./Note";

export const NoteList = ({ notes, deleteNote, onNoteClick }) => {
  return (
    <div className="note-list">
      {notes.map((note, index) => (
        <Note key={index} note={note} deleteNote={deleteNote} onNoteClick={() => onNoteClick(note)} />
      ))}
    </div>
  );
};
