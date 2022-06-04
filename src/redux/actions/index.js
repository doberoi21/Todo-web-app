import { ADD, EDIT, DELETE } from "./types";
// import store from '../store';

export const addNote = (title) => {
  // const state=store.getState();
  // console.log(state);
  return {
    type: ADD,
    payload: title,
  };
};

export const editNote = (index, text) => {
  return {
    type: EDIT,
    payload: { index, text }
  };
};

export const deleteNote = (index) => {
  return {
    type: DELETE,
    payload:index
  };
};
