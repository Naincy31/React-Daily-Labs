import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="Cards">
      <Link to="/counter">
        <div className='card'>
          <h1>Counter</h1>
        </div>
      </Link>
      <Link to="/guess-the-number">
        <div className='card'>
          <h1>Guess the number</h1>
        </div>
      </Link>
      <Link to="/string-transform">
        <div className='card'>
          <h1>String Transform</h1>
        </div>
      </Link>
      <Link to="/telephone-formatter">
        <div className='card'>
          <h1>Telephone Formatter</h1>
        </div>
      </Link>
      <Link to="/toast">
        <div className='card'>
          <h1>Toast/Snackbar</h1>
        </div>
      </Link>
      <Link to="/color-me">
        <div className='card'>
          <h1>Color Me</h1>
        </div>
      </Link>
      <Link to="/bmi-calc">
        <div className='card'>
          <h1>BMI Calculator</h1>
        </div>
      </Link>
      <Link to="/dice-game">
        <div className='card'>
          <h1>Dice Game</h1>
        </div>
      </Link>
      <Link to="/file-uploader">
        <div className='card'>
          <h1>File Uploader</h1>
        </div>
      </Link>
      <Link to="/bill-split">
        <div className='card'>
          <h1>Bill Splitter</h1>
        </div>
      </Link>
      <Link to="/image-gallery">
        <div className='card'>
          <h1>Image Gallery</h1>
        </div>
      </Link>
      <Link to="/tic-tac-toe">
        <div className='card'>
          <h1>Tic Tac Toe</h1>
        </div>
      </Link>
      <Link to="/accordion">
        <div className='card'>
          <h1>Accordion</h1>
        </div>
      </Link>
      <Link to="/star-rating">
        <div className='card'>
          <h1>Star Rating</h1>
        </div>
      </Link>
      <Link to="/progress-bar">
        <div className='card'>
          <h1>Progress Bar</h1>
        </div>
      </Link>
      <Link to="/todo">
        <div className='card'>
          <h1>Todo List</h1>
        </div>
      </Link>
      <Link to="/nested-checkbox">
        <div className='card'>
          <h1>Nested heckbox</h1>
        </div>
      </Link>
      <Link to="/file-explorer">
        <div className='card'>
          <h1>File Explorer</h1>
        </div>
      </Link>
      <Link to="/phone-book">
        <div className='card'>
          <h1>Phone Book</h1>
        </div>
      </Link>
      <Link to="/quiz-builder">
        <div className='card'>
          <h1>Quiz Builder</h1>
        </div>
      </Link>
      <Link to="/basic-tic-tac-toe">
        <div className='card'>
          <h1>Basic Tic Tac Toe</h1>
        </div>
      </Link>
      <Link to="/weather-dashboard">
        <div className='card'>
          <h1>Weather Dashboard</h1>
        </div>
      </Link>
      <Link to="/apollo-todo">
        <div className='card'>
          <h1>Apollo Todo</h1>
        </div>
      </Link>
      <Link to="/chips">
        <div className='card'>
          <h1>Chips</h1>
        </div>
      </Link>
    </div>
  );
}

export default App;
