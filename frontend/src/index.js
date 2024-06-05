import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Header from './frontendAppReact/Header';
import Home from './frontendAppReact/Home';
import Notes from './frontendAppReact/Notes';
import NoteDetail from './frontendAppReact/NoteDetail';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/home' />}></Route>
        <Route path='/home' exact element={<Home />}></Route>
        <Route path='/notes' exact element={<Notes />}></Route>
        <Route path='/note/:id' exact element={<NoteDetail />}></Route>
      </Routes>
    </BrowserRouter> 

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
