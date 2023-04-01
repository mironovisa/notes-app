import React, { useState } from "react";
import Addbutton from "../UI/Kits/Buttons/Addbutton";

export const NoteForm = ({ addNote }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addNote(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Note"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Addbutton/>
    </form>
  );
  
};
