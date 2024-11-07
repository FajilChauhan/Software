import React from 'react';
import ReactDOM from 'react-dom/client';  // Note the change here
import './index.css';
import App from './App';

// This creates the root for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
