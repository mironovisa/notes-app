import React from 'react';

export const NoteEditForm = ({ onSubmit, initialText="", initialTitle="" }) => {
  const [title, setTitle] = React.useState(initialTitle);
  const [text, setText] = React.useState(initialText);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text, title);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="note-form-container">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Type your note..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={1}
          style={{ overflow: "hidden", resize: "none" }}
        />
        <button type="submit">Save Changes</button>
      </div>
    </form>
  );
};
