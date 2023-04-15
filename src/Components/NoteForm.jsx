import React, { useState, useRef, useEffect } from 'react';
import Addbutton from "../UI/Kits/Buttons/Addbutton";
import { Tumbler } from "../UI/Kits/Tumbler/Tumbler";

export const NoteForm = ({ addNote, onSubmit, text: initialText="", title: initialTitle=""}) => {
  const [title, setTitle] = useState(initialTitle);
  const [text, setText] = useState(initialText);
  const [showTitle, setShowTitle] = useState(false);
  const textareaRef = useRef(null);
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  }, [text]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(text, title);
    }
    else {
      addNote(text, title);
    }
    setTitle("");
    setText("");
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="note-form-container">
      {showTitle && (
        <input 
          type="text"
          placeholder="Add title"
          value={title}
          onChange={(e) => setTitle(e.target.value)} /> 
        )}

          <Tumbler id="toggle-title" checked={showTitle} onChange={()=> setShowTitle(!showTitle)}/>

        <textarea ref={textareaRef} placeholder="Type your note..." value={text} onChange={(e) => setText(e.target.value)}
          rows={1} style={{overflow: "hidden", resize:"none"}} />
        <Addbutton text="Add"/>
        </div>
    </form>
  );
  
};
