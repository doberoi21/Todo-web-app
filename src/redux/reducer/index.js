import todoReducer from "./NotesReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers ({
    todoReducer
})

export default rootReducer;