import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.mjs';
import reportWebVitals from './reportWebVitals.mjs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ------

// Remove - <React.StrictMode> to prevent useEffect() render twice.
// It renders twice on development because for verification and effeciency purpose.

// ------

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
