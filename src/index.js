import React from "react";
import ReactDOM from "react-dom";
import TodoContainer from "./functionBased/components/TodoContainer.js";
import "./App.css"

const root = document.querySelector('#root');

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>
  , root);
