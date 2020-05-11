import React, { useState } from 'react';
import './App.css';

function App() {
  let [numberStr, setNumberStr] = useState('');

  return (
    <div className="calc-container">
      <div id="display">
        <div className="upper-display">
          <p>{'dasdasd'}</p>
        </div>
        <div className="lower-display">
          <p>{'sdasd'}</p>
        </div>
      </div>
      <button
        onClick={() => {
          setNumberStr('');
        }}
        className="button ac-button"
        id="clear"
      >
        AC
      </button>
      <button
        onClick={() => {
          setNumberStr(`${numberStr}/`);
        }}
        className="button operator"
        id="divide"
      >
        /
      </button>
      <button
        onClick={() => {
          setNumberStr(`${numberStr}*`);
        }}
        className="button operator"
        id="multiply"
      >
        X
      </button>
      <button
        onClick={() => {
          setNumberStr(`${numberStr}7`);
        }}
        className="button"
        id="seven"
      >
        7
      </button>
      <button
        onClick={() => {
          setNumberStr(`${numberStr}8`);
        }}
        className="button"
        id="eight"
      >
        8
      </button>
      <button
        onClick={() => {
          setNumberStr(`${numberStr}9`);
        }}
        className="button"
        id="nine"
      >
        9
      </button>
      <button
        onClick={() => {
          setNumberStr(`${numberStr}-`);
        }}
        className="button operator"
        id="subtract"
      >
        -
      </button>
      <button
        onClick={() => {
          setNumberStr(`${numberStr}4`);
        }}
        className="button"
        id="four"
      >
        4
      </button>
      <button
        onClick={() => {
          setNumberStr(`${numberStr}5`);
        }}
        className="button"
        id="five"
      >
        5
      </button>
      <button
        onClick={() => {
          setNumberStr(`${numberStr}6`);
        }}
        className="button"
        id="six"
      >
        6
      </button>
      <button
        onClick={() => {
          setNumberStr(`${numberStr}+`);
        }}
        className="button operator"
        id="add"
      >
        +
      </button>
      <button
        onClick={() => {
          setNumberStr(`${numberStr}1`);
        }}
        className="button"
        id="one"
      >
        1
      </button>
      <button
        onClick={() => {
          setNumberStr(`${numberStr}2`);
        }}
        className="button"
        id="two"
      >
        2
      </button>
      <button
        onClick={() => {
          setNumberStr(`${numberStr}3`);
        }}
        className="button"
        id="three"
      >
        3
      </button>
      <button onClick={() => {}} className="button operator" id="equals">
        =
      </button>
      <button
        onClick={() => {
          setNumberStr(`${numberStr}0`);
        }}
        className="button"
        id="zero"
      >
        0
      </button>
      <button
        onClick={() => {
          setNumberStr(`${numberStr}.`);
        }}
        className="button"
        id="decimal"
      >
        .
      </button>
    </div>
  );
}

export default App;
