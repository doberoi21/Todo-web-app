import React from "react";
import "./NotesList.css";
import NotesItem from "../NotesItem/NotesItem";
import { useSelector } from "react-redux";

const NotesList = () => {
  const {todoList} = useSelector((state) => state.todoReducer); // todoList notesItem k andar 
  // console.log(notesList);

  return (
    <div>
      <ul>
        {todoList.map((item,index)=>(
          <li><NotesItem title={item} index={index} /></li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
