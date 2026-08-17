import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="app">
      <div className="overlay"></div>

      <div className="counter-card">
        <div className="badge">REACT HOOKS</div>

        <h1>Counter Application</h1>

        <p className="subtitle">
          Built using React Functional Components & useState Hook
        </p>

        <div className="counter-circle">
          <span>{count}</span>
        </div>

        <div className="buttons">
          <button className="decrement" onClick={decrement}>
            −
          </button>

          <button className="reset" onClick={reset}>
            Reset
          </button>

          <button className="increment" onClick={increment}>
            +
          </button>
        </div>

        <div className="info">
          <div>
            <strong>useState()</strong>
            <span>State Management</span>
          </div>

          <div>
            <strong>+</strong>
            <span>Increment</span>
          </div>

          <div>
            <strong>−</strong>
            <span>Decrement</span>
          </div>
        </div>
      </div>

      <footer>
        React Hooks Mini Project
      </footer>
    </div>
  );
}

export default App;