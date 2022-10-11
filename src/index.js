import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./index.css";
import { legacy_createStore as createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
number.innerText = 0;
//action은 redux에서 function을 부를 때 쓰는 두번째 parameter or argument다
const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};
//count value update
countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
};
const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};
add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
