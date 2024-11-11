import { useState } from 'react';
import './App.css';

function App() {
  const [ count, setCount ] = useState(0)
  const [ inputValue, setInputValue ] = useState(1)

  const handleDecrement = () => {
    setCount(prevCount => prevCount - inputValue)
  }

  const handleIncrement = () => {
    setCount(prevCount => prevCount + inputValue)
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <div className="App">
      <h1 id='count'>{count}</h1>
      <div className='buttons'>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
      <p>Increment/Decrement by: <input type='number' max={10} min={1} value={inputValue} onChange={(e) => setInputValue(Number(e.target.value))}/></p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
