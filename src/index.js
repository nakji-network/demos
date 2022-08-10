import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Historical from './historical'
import Realtime from './realtime'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="historical" element={<Historical />} />
      <Route path="realtime" element={<Realtime />} />
    </Routes>
  </BrowserRouter>
);