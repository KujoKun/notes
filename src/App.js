import React, { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "17-04-2022",
    },
    {
      id: nanoid(),
      text: "This is my 2nd note",
      date: "17-03-2022",
    },
    {
      id: nanoid(),
      text: "This is my 3rd note",
      date: "17-01-2022",
    },
  ]);
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className="container">
      <Search />
      <NotesList notes={notes} addNote={addNote} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
