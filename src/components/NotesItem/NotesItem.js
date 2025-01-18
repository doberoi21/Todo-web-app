import React, { useState } from "react";
import "./NotesItem.css";
import { useDispatch } from "react-redux";
import { editNote, deleteNote } from "../../redux/actions/index";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';

const NotesItem = (props) => {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const renderTitle = () => {
    return (
      <div>
        <input type="checkbox" className="checkbox-color" />
        <label className="note-content"> {props.title} </label>
      </div>
    );
  };
  const renderInput = () => {
    return (
      <div>
        <input type="checkbox" className="checkbox-color" disabled />
        <input
          className="note-content"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            background: "transparent",
            color: "white",
            border: "none",
            outline: "none",
          }}
        />
      </div>
    );
  };
  const renderEdit = () => {
    return (
      <div>
        <button
          className="edit"
          onClick={() => {
            setEdit(true);
            setText(props.title);
          }}
        >
          <EditIcon />
        </button>
        <button
          className="delete"
          onClick={() => dispatch(deleteNote(props.index))}
        >
          <DeleteIcon />
        </button>
      </div>
    );
  };
  const renderDone = () => {
    return (
      <div>
        <button
          className="edit"
          onClick={() => {
            dispatch(editNote(props.index, text));
            setEdit(false);
          }}
        >
          <DoneIcon />
        </button>
        <button className="delete" onClick={() => setEdit(false)}>
          <ClearIcon />
        </button>
      </div>
    );
  };
  return (
    <div>
      <div className="card-container">
        {edit ? renderInput() : renderTitle()}
        {edit ? renderDone() : renderEdit()}
      </div>
    </div>
  );
};

export default NotesItem;
