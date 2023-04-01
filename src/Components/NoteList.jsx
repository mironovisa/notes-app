import React from "react";
import { Note } from "./Note";

export const NoteList = ({ notes }) => {
  return (
    <div className="grid-container">
      {notes.map((note, index) => (
        <Note key={index} note={note} />
      ))}
    </div>
  );
};
