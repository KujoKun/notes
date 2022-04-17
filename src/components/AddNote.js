import React, { useState } from "react";

const AddNote = ({ addNote }) => {
  const [noteText, setNoteText] = useState("");
  const charLimit = 200;
  const whenChanged = (e) => {
    if (charLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };
  const whenSaved = () => {
    if (noteText.trim().length > 0) {
      addNote(noteText);
      setNoteText("");
    }
  };
  return (
    <div className="note new-note">
      <textarea
        placeholder="Type to add note..."
        cols="10"
        rows="8"
        onChange={whenChanged}
        value={noteText}
      ></textarea>
      <div className="note-footer">
        <small>{charLimit - noteText.length} remaining</small>
        <button className="save" onClick={whenSaved}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
