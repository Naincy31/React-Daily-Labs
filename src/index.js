import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Counter from './components/Counter';
import GuessTheNumber from './components/GuessTheNumber';
import StringTransform from './components/StringTransform';
import TelephoneFormatter from './components/TelephoneFormatter';
import Toast from './components/Toast';
import ColorMe from './components/ColorMe';
import BMICalculator from './components/BMICalculator';
import DiceGame from './components/DiceGame';
import FileUploader from './components/FileUploader';
import BillSplit from './components/BillSplit';
import ImageGallery from './components/ImageGallery';
import TicTacToe from './components/TicTacToe';
import Accordion from './components/Accordion';
import StarRating from './components/StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/guess-the-number" element={<GuessTheNumber />} />
        <Route path="/string-transform" element={<StringTransform />} />
        <Route path="/telephone-formatter" element={<TelephoneFormatter />} />
        <Route path="/toast" element={<Toast />} />
        <Route path="/color-me" element={<ColorMe />} />
        <Route path="/bmi-calc" element={<BMICalculator />} />
        <Route path="/dice-game" element={<DiceGame />} />
        <Route path="/file-uploader" element={<FileUploader />} />
        <Route path='/bill-split' element={<BillSplit />} />
        <Route path='/image-gallery' element={<ImageGallery />} />
        <Route path='/tic-tac-toe' element={<TicTacToe />} />
        <Route path='/accordion' element={<Accordion />} />
        <Route path='/star-rating' element={<StarRating />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
