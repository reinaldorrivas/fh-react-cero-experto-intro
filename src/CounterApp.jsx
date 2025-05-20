import { useState } from 'react';
import './CounterApp.css';

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleBtnClickSum = ({ target: { innerText } }) => {
    const [value] = innerText.match(/\d+/g);

    setCounter(counter + parseInt(value));
  };

  const handleBtnClickSubs = ({ target: { innerText } }) => {
    setCounter((counter) => {
      const [value] = innerText.match(/\d+/g);
      return counter - parseInt(value);
    });
  };

  const handleBtnClickReset = () => {
    setCounter(value);
  };

  return (
    <section>
      <h2>CounterApp</h2>
      <p>Contador: {counter}</p>

      <button onClick={handleBtnClickSum}>+1</button>
      <button onClick={handleBtnClickSubs}>-1</button>
      <button onClick={handleBtnClickReset}>Reset</button>
    </section>
  );
};

export default CounterApp;
