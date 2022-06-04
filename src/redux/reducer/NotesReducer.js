import { ADD, DELETE, EDIT } from "../actions/types";

const initialState = {
  todoList: [],
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, todoList: [...state.todoList, action.payload] };

    case DELETE:
      const i = action.payload;
      const newUpdatedList = state.todoList.filter((item) => {
        return state.todoList[i] !== item;
      });
      return { ...state, todoList: newUpdatedList };

    case EDIT:
      // return { ...state,text:state.todoList[action.payload] };
      const indexVal = action.payload.index;
      const textVal = action.payload.text;
      // const newTodoList = state.todoList.slice();
      const newTodoList = [...state.todoList];
      newTodoList[indexVal] = textVal;
      return { ...state, todoList: newTodoList };

    default:
      return state;
  }
};

export default todoReducer;
