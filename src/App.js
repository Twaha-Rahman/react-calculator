import React, { useState } from 'react';
import './App.css';

function calc(equationString) {
  console.log(equationString);
  return false;
}

function App() {
  let [numberStr, setNumberStr] = useState('');

  let [displayView, setDisplayView] = useState('');
  //let [currentSign, setCurrentSign] = useState('');

  let res;
  if (displayView) {
    const number = Number(displayView);
    if (!isNaN(number)) {
      if (displayView.includes('.')) {
        res = displayView;
      } else {
        res = number;
      }
    } else {
      res = displayView;
    }
  } else {
    res = '0';
  }

  return (
    <div className="calc-container">
      <div id="display">{res}</div>
      <button
        onClick={() => {
          setNumberStr('');
          setDisplayView('');
        }}
        className="button ac-button"
        id="clear"
      >
        AC
      </button>
      <button
        onClick={() => {
          setNumberStr(`${numberStr}/`);
          setDisplayView('/');
        }}
        className="button operator"
        id="divide"
      >
        /
      </button>
      <button
        onClick={() => {
          setNumberStr(`${numberStr}*`);
          setDisplayView('X');
        }}
        className="button operator"
        id="multiply"
      >
        X
      </button>
      <button
        onClick={() => {
          setNumberStr(`${numberStr}7`);
          if (isNaN(Number(displayView)) || displayView === '') {
            setDisplayView('7');
          } else {
            setDisplayView(`${displayView}7`);
          }
        }}
        className="button"
        id="seven"
      >
        7
      </button>
      <button
        onClick={() => {
          setNumberStr(`${numberStr}8`);
          if (isNaN(Number(displayView)) || displayView === '') {
            setDisplayView('8');
          } else {
            setDisplayView(`${displayView}8`);
          }
        }}
        className="button"
        id="eight"
      >
        8
      </button>
      <button
        onClick={() => {
          setNumberStr(`${numberStr}9`);
          if (isNaN(Number(displayView)) || displayView === '') {
            setDisplayView('9');
          } else {
            setDisplayView(`${displayView}9`);
          }
        }}
        className="button"
        id="nine"
      >
        9
      </button>
      <button
        onClick={() => {
          setNumberStr(`${numberStr}-`);
          setDisplayView('-');
        }}
        className="button operator"
        id="subtract"
      >
        -
      </button>
      <button
        onClick={() => {
          setNumberStr(`${numberStr}4`);
          if (isNaN(Number(displayView)) || displayView === '') {
            setDisplayView('4');
          } else {
            setDisplayView(`${displayView}4`);
          }
        }}
        className="button"
        id="four"
      >
        4
      </button>
      <button
        onClick={() => {
          setNumberStr(`${numberStr}5`);
          if (isNaN(Number(displayView)) || displayView === '') {
            setDisplayView('5');
          } else {
            setDisplayView(`${displayView}5`);
          }
        }}
        className="button"
        id="five"
      >
        5
      </button>
      <button
        onClick={() => {
          setNumberStr(`${numberStr}6`);
          if (isNaN(Number(displayView)) || displayView === '') {
            setDisplayView('6');
          } else {
            setDisplayView(`${displayView}6`);
          }
        }}
        className="button"
        id="six"
      >
        6
      </button>
      <button
        onClick={() => {
          setNumberStr(`${numberStr}+`);
          setDisplayView('+');
        }}
        className="button operator"
        id="add"
      >
        +
      </button>
      <button
        onClick={() => {
          setNumberStr(`${numberStr}1`);
          if (isNaN(Number(displayView)) || displayView === '') {
            setDisplayView('1');
          } else {
            setDisplayView(`${displayView}1`);
          }
        }}
        className="button"
        id="one"
      >
        1
      </button>
      <button
        onClick={() => {
          setNumberStr(`${numberStr}2`);
          if (isNaN(Number(displayView)) || displayView === '') {
            setDisplayView('2');
          } else {
            setDisplayView(`${displayView}2`);
          }
        }}
        className="button"
        id="two"
      >
        2
      </button>
      <button
        onClick={() => {
          setNumberStr(`${numberStr}3`);
          if (isNaN(Number(displayView)) || displayView === '') {
            setDisplayView('3');
          } else {
            setDisplayView(`${displayView}3`);
          }
        }}
        className="button"
        id="three"
      >
        3
      </button>
      <button
        onClick={() => {
          const calculatedResult = calc(numberStr);

          if (!calculatedResult) {
            setDisplayView('Error!');
          } else {
            setDisplayView(calculatedResult);
          }
        }}
        className="button operator"
        id="equals"
      >
        =
      </button>
      <button
        onClick={() => {
          setNumberStr(`${numberStr}0`);
          if (isNaN(Number(displayView)) || displayView === '') {
            setDisplayView('0');
          } else {
            setDisplayView(`${displayView}0`);
          }
        }}
        className="button"
        id="zero"
      >
        0
      </button>
      <button
        onClick={() => {
          setNumberStr(`${numberStr}.`);
          if (isNaN(Number(displayView)) || displayView === '') {
            setDisplayView('0.');
          } else {
            if (!displayView.includes('.')) {
              setDisplayView(`${displayView}.`);
            }
          }
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
