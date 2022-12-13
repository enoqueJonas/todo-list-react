import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoContainer from './functionBased/components/TodoContainer.js';
import './App.css';
import About from './functionBased/pages/About.js';
import NotMatch from './functionBased/pages/NotMatch.js';
import Navbar from './functionBased/components/Navbar.js';

const root = document.querySelector('#root');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<TodoContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotMatch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  root,
);
