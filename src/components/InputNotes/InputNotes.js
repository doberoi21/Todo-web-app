import React, { useState } from "react";
import { addNote } from "../../redux/actions";
import "./InputNotes.css";
import {  useDispatch } from "react-redux";

const InputNotes = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleText = (e) => {
    setTitle(e.target.value);
  };

  const handleClick = (e) => {
    // if (title) dispatch(addNote(title));
    title && dispatch(addNote(title));
    setTitle("");
  };

  return (
    <>
      <div className="note-creation">
        <input
          type="text"
          placeholder="Add notes here ..."
          className="input-field"
          onChange={handleText}
          value={title}
        />
        <button className="add-button" onClick={handleClick} />
      </div>
    </>
  );
};

export default InputNotes;
