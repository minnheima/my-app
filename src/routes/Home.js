import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import Todo from "../Components/Todo";

function Home({ toDos, addTodo }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    addTodo(text);
    setText("");
    // console.log(text);
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>submit</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <Todo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

// mapStateToProps
function mapStateToProps(state, ownProps) {
  return { toDos: state };
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    addTodo: (text) => dispatch(actionCreators.addTodo(text)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
