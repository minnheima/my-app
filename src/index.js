import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./index.css";
import { legacy_createStore as createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE_TODO:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));

const paintTodos = () => {
  const toDos = store.getState();
  ul.innerHTML = ""; // ul안의 li값을 없애줌
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "Del";
    btn.addEventListener("click", deleteTodo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};
store.subscribe(paintTodos); //store가 바뀔때마다 repainting해서 계속 이전 값들도 보임 so! -> line29 ul.innerHTML = "";

const addTodo = (text) => {
  store.dispatch({ type: ADD_TODO, text });
};

const deleteTodo = (e) => {
  // console.log(e.target.parentNode.id);
  const id = parseInt(e.target.parentNode.id);
  store.dispatch({ type: DELETE_TODO, id });
};
const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  addTodo(toDo);
};

form.addEventListener("submit", onSubmit);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
