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
    </div>
  );
}

export default App;
