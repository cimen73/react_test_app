import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from './Counter';

function App() {
  const [btnColor, setBtnColor] = useState('red');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className='bg'>
    <div className="App">
     
      <h2>Test Link</h2>
      <a>Learn React</a>
      <h2>Test Button</h2>
      <button
        style={{ backgroundColor: btnColor }}
        onClick={() =>
          setBtnColor(btnColor === 'red' ? 'blue' : 'red')
        }
        disabled={isChecked}
      >
        Change to {btnColor === 'red' ? 'blue' : 'red'}
      </button>
      <input
        type="checkbox"
        onChange={() => setIsChecked(!isChecked)}
      />
      <label>Disable Button</label>

      <Counter />
    </div>
    </div>
  );
}

export default App;