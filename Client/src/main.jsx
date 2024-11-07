// src/main.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // Note that Vite uses 'react-dom/client' for React 18+
import App from './App';
import './index.css';  // Your global CSS file

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
