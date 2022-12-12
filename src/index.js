import React from "react";
import ReactDOM from "react-dom";
import TodoContainer from "./components/TodoContainer";

const root = document.querySelector('#root');

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>
  , root);
