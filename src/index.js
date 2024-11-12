import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Counter from './components/Counter';
import GuessTheNumber from './components/GuessTheNumber';
import StringTransform from './components/StringTransform';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/guess-the-number" element={<GuessTheNumber />} />
        <Route path="/string-transform" element={<StringTransform />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
