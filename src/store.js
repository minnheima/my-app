import { legacy_createStore as createStore } from "redux";

const ADD = "ADD";
const DEL = "DELETE";

export const addTodo = (text) => {
  return {
    type: ADD,
    text,
  };
};
export const delTodo = (id) => {
  return {
    type: DEL,
    id: parseInt(id),
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DEL:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};
const store = createStore(reducer);
export const actionCreators = {
  addTodo,
  delTodo,
};
// store.subscribe();

export default store;
