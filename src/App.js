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
      <Link to="/column-table">
        <div className='card'>
          <h1>Column Table</h1>
        </div>
      </Link>
      <Link to="/color-me">
        <div className='card'>
          <h1>Color Me</h1>
        </div>
      </Link>
    </div>
  );
}

export default App;
