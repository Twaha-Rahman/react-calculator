import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  let [numberStr, setNumberStr] = useState('');
  let [oparetor, setOparetor] = useState([]);
  let [numbers, setNumbers] = useState([]);

  useEffect(() => {
    if (numberStr.length > 9) {
      setNumberStr('Digit Limit Reached!');
    }
  });

  return (
    <div className="calc-container">
      <div id="display">
        <div className="upper-display">
          <p>23+43</p>
        </div>
        <div className="lower-display">
          <p>{numberStr}</p>
        </div>
      </div>
      <button
        onClick={() => {
          setNumberStr('');
          setOparetor([]);
          setNumbers([]);
        }}
        className="button ac-button"
      >
        AC
      </button>
      <button className="button operator" id="divide">
        /
      </button>
      <button className="button operator" id="multiply">
        X
      </button>
      <button className="button" id="seven">
        7
      </button>
      <button className="button" id="eight">
        8
      </button>
      <button className="button" id="nine">
        9
      </button>
      <button className="button operator" id="subtract">
        -
      </button>
      <button className="button" id="four">
        4
      </button>
      <button className="button" id="five">
        5
      </button>
      <button className="button" id="six">
        6
      </button>
      <button className="button operator" id="add">
        +
      </button>
      <button className="button" id="one">
        1
      </button>
      <button className="button" id="two">
        2
      </button>
      <button className="button" id="three">
        3
      </button>
      <button
        onClick={() => {
          const num = Number(numberStr);
          setNumbers([...numbers, num]);
        }}
        className="button operator"
        id="equals"
      >
        =
      </button>
      <button
        onClick={(e) => {
          setNumberStr(`${numberStr}0`);
        }}
        className="button"
        id="zero"
      >
        0
      </button>
      <button className="button" id="decimal">
        .
      </button>
    </div>
  );
}

export default App;
