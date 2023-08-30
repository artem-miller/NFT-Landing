import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

window.location.hash = "#";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
