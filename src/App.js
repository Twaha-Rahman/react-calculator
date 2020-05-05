import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  let [numberStr, setNumberStr] = useState('');
  let [oparetor, setOparetor] = useState([]);
  let [numbers, setNumbers] = useState([]);
  let [lastClicked, setLastClicked] = useState('');
  let [upperDisplay, setUpperDisplay] = useState('');
  let [lowerDisplay, setLowerDisplay] = useState('');

  useEffect(() => {
    const arrToJoin = [];

    if (numbers.length > oparetor.length) {
      for (let index = 0; index < numbers.length; index++) {
        if (numbers[index]) {
          arrToJoin.push(numbers[index]);
        }

        if (oparetor[index]) {
          arrToJoin.push(oparetor[index]);
        }
      }
    } else {
      for (let index = 0; index < oparetor.length; index++) {
        if (numbers[index]) {
          arrToJoin.push(numbers[index]);
        }

        if (oparetor[index]) {
          arrToJoin.push(oparetor[index]);
        }
      }
    }

    if (numberStr !== '') {
      arrToJoin.push(numberStr);
    }

    setUpperDisplay(arrToJoin.join(''));

    if (numberStr.length > 9) {
      setNumberStr('Digit Limit Reached!');
    }
  });

  return (
    <div className="calc-container">
      <div id="display">
        <div className="upper-display">
          <p>{upperDisplay}</p>
        </div>
        <div className="lower-display">
          <p>{numberStr || lowerDisplay}</p>
        </div>
      </div>
      <button
        onClick={() => {
          setNumberStr('');
          setOparetor([]);
          setNumbers([]);
          setUpperDisplay('');
          setLowerDisplay('');
          document.querySelector('#display').style.border = '';
        }}
        className="button ac-button"
      >
        AC
      </button>
      <button
        onClick={() => {
          setOparetor([...oparetor, '/']);

          const num = Number(numberStr);

          if (num !== 0) {
            setNumbers([...numbers, num]);
            setNumberStr('');
          }
        }}
        className="button operator"
        id="divide"
      >
        /
      </button>
      <button
        onClick={() => {
          setOparetor([...oparetor, '*']);

          const num = Number(numberStr);

          if (num !== 0) {
            setNumbers([...numbers, num]);
            setNumberStr('');
          }
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
          setOparetor([...oparetor, '-']);

          const num = Number(numberStr);

          if (num !== 0) {
            setNumbers([...numbers, num]);
            setNumberStr('');
          }
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
          setOparetor([...oparetor, '+']);

          const num = Number(numberStr);

          if (num !== 0) {
            setNumbers([...numbers, num]);
            setNumberStr('');
          }
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
      <button
        onClick={() => {
          const num = Number(numberStr);

          let extendedNumbers;

          if (num !== 0) {
            setNumbers([...numbers, num]);
            extendedNumbers = [...numbers, num];
          } else {
            extendedNumbers = [...numbers];
          }

          setNumberStr('');

          if (extendedNumbers.length - 1 !== oparetor.length) {
            document.querySelector('#display').style.border = 'orangered 0.5px solid';
          } else {
            console.log(extendedNumbers, oparetor);
            let result = extendedNumbers[0];

            extendedNumbers.forEach((val, index) => {
              const runningOperator = oparetor[index];
              if (runningOperator === '+') {
                if (extendedNumbers[index + 1]) {
                  result += extendedNumbers[index + 1];
                }
              }
              if (runningOperator === '-') {
                if (extendedNumbers[index + 1]) {
                  result -= extendedNumbers[index + 1];
                }
              }
              if (runningOperator === '*') {
                if (extendedNumbers[index + 1]) {
                  result *= extendedNumbers[index + 1];
                }
              }
              if (runningOperator === '/') {
                if (extendedNumbers[index + 1]) {
                  result /= extendedNumbers[index + 1];
                }
              }
            });

            result = parseFloat(result.toFixed(2));

            console.log(result);

            setLowerDisplay(result);

            setNumbers([result]);
            setOparetor([]);
            setUpperDisplay('');
            setLowerDisplay('');

            document.querySelector('#display').style.border = '';
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
