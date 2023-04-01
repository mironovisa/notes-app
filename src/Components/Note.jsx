import React from "react";

export const Note = ({ note }) => {
  return (
    <div className="card">
      <p>{note.text}</p>
      <p>{note.date}</p>
    </div>
  );
};
