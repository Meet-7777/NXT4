import React from 'react';
import ReactDOM from 'react-dom/client';
import MainRouter from './MainRouter'; // Import the MainRouter component
import './App.css'; // Global styles if any

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainRouter /> {/* Render the main router */}
  </React.StrictMode>
);
