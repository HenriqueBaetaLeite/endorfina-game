import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import EndorfinaContext from './context/EndorfinaContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <EndorfinaContext>
      <App />
    </EndorfinaContext>
  </BrowserRouter>,
  document.getElementById('root'),
);
