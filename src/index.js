import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Counter from './components/Counter/Counter';
import GuessTheNumber from './components/GuessNumber/GuessTheNumber';
import StringTransform from './components/StringTransform/StringTransform';
import TelephoneFormatter from './components/TelephoneFormatter/TelephoneFormatter';
import Toast from './components/Toast/Toast';
import ColorMe from './components/Color/ColorMe';
import BMICalculator from './components/Calculator/BMICalculator';
import DiceGame from './components/Dice/DiceGame';
import FileUploader from './components/FileUploader/FileUploader';
import BillSplit from './components/Bill/BillSplit';
import ImageGallery from './components/Gallery/ImageGallery';
import TicTacToe from './components/TicTacToe/TicTacToe';
import Accordion from './components/Accordion/Accordion';
import StarRating from './components/Rating/StarRating';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Todo from './components/Todo/Todo';
import NestedCheckbox from './components/NestedCheckbox/NestedCheckbox';
import FileExplorer from './components/FileExplorer/FileExplorer';

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
        <Route path='/progress-bar' element={<ProgressBar />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/nested-checkbox' element={<NestedCheckbox />} />
        <Route path='/file-explorer' element={<FileExplorer />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
