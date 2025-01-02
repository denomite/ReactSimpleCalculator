import { useState } from 'react';
import { evaluate } from 'mathjs';
import './index.css';

function App() {
  const [count, setCount] = useState('')

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = evaluate(count);
        setCount(String(result));
      } catch {
        setCount('Error'); 
      }
    } else if (value === 'C') {
      setCount(''); 
    } else {
      setCount((prev) => prev + value);
    }
  };

  const buttons = [
    ['7', '8', '9', '+'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '*'],
    ['0', 'C', '=', '/'],
  ];

  return (
    <div className="container">
      <h1> Calculator </h1>
      <p> {count || '0'}</p>
      {buttons.map((row, rowIndex) => 
        <div key={rowIndex}>
          {row.map((btn) => (
            <button key={btn} onClick={() => handleButtonClick(btn)}>
              {btn}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default App