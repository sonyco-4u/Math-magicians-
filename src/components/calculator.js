import React, { useEffect, useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0, operation: null, next: null, error: null,
  });

  const click = (e) => {
    const result = calculate(state, e.target.textContent);
    setState(result);
  };

  useEffect(() => {
    if (state.total !== null && state.total !== undefined) {
      document.title = `your result is ${state.total}`;
    }
  });

  return (
    <div className="container">
      <div className="title">Just MATH it &#10004;</div>
      <div className="calculator-container">
        <div className="result">
          {state.total}
          {state.operation}
          {state.next}
          {state.error}
        </div>
        <button type="button" onClick={click}>AC</button>
        <button type="button" onClick={click}>+/-</button>
        <button type="button" onClick={click}>%</button>
        <button type="button" className="last-col" onClick={click}>÷</button>
        <button type="button" onClick={click}>7</button>
        <button type="button" onClick={click}>8</button>
        <button type="button" onClick={click}>9</button>
        <button type="button" className="last-col" onClick={click}>*</button>
        <button type="button" onClick={click}>4</button>
        <button type="button" onClick={click}>5</button>
        <button type="button" onClick={click}>6</button>
        <button type="button" className="last-col" onClick={click}>-</button>
        <button type="button" onClick={click}>1</button>
        <button type="button" onClick={click}>2</button>
        <button type="button" onClick={click}>3</button>
        <button type="button" className="last-col" onClick={click}>+</button>
        <button type="button" className="zero" onClick={click}>0</button>
        <button type="button" onClick={click}>.</button>
        <button type="button" className="last-col" onClick={click}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
