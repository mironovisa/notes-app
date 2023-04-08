import React, { useEffect, useState, useRef } from "react";
import Addbutton from "../UI/Kits/Buttons/Addbutton";
import { Tumbler } from "../UI/Kits/Tumbler/Tumbler";
export const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [showTitle, setShowTitle] = useState(false);
  const textareaRef = useRef(null);
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  }, [text]);
  const autoResizeTextarea = (textarea) => {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
    textarea.addEventListener("input", function () {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(text, title);
      setTitle("");
      setText("");
    }
  

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
        <Addbutton />
        </div>
    </form>
  );
  
};
