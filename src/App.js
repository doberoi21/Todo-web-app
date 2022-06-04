import React from "react";
import InputNotes from "./components/InputNotes/InputNotes";
import "./App.css";
import NotesList from "./components/NotesList/NotesList";

function App() {
  return (
    <div className="app-container">
      <div>
        <h1>To-Do List</h1>
      </div>
      <InputNotes />
      <h4 className="notes-section"> Your Notes </h4>
      <NotesList />
    </div>
  );
}

export default App;
