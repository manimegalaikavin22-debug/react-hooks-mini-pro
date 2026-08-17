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

      <div className="counter-container">

        {/* HEADER */}

        <div className="header">

          <div className="logo">
            <span>R</span>
          </div>

          <div>
            <p className="subtitle">
              REACT HOOKS
            </p>

            <h1>
              Counter
            </h1>
          </div>

        </div>


        {/* COUNTER CARD */}

        <div className="counter-card">

          <div className="card-top">

            <span>
              SIMPLE COUNTER
            </span>

            <span className="status">
              ● LIVE
            </span>

          </div>


          <div className="counter-display">

            <p className="count-label">
              CURRENT VALUE
            </p>

            <div
              className={`count ${
                count > 0
                  ? "positive"
                  : count < 0
                  ? "negative"
                  : ""
              }`}
            >
              {count}
            </div>

            <p className="count-status">

              {count > 0
                ? "Value is positive"
                : count < 0
                ? "Value is negative"
                : "Counter is at zero"}

            </p>

          </div>


          {/* BUTTONS */}

          <div className="buttons">

            <button
              className="counter-button decrease"
              onClick={decrement}
            >
              <span>−</span>
              Decrease
            </button>


            <button
              className="counter-button reset"
              onClick={reset}
            >
              Reset
            </button>


            <button
              className="counter-button increase"
              onClick={increment}
            >
              Increase
              <span>+</span>
            </button>

          </div>


          {/* HOOK INFO */}

          <div className="hook-info">

            <div className="info-item">

              <span className="info-icon">
                ⚛
              </span>

              <div>
                <strong>useState()</strong>
                <p>
                  React State Hook
                </p>
              </div>

            </div>


            <div className="info-item">

              <span className="info-icon">
                ↻
              </span>

              <div>
                <strong>Functional</strong>
                <p>
                  React Component
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* FOOTER */}

        <div className="footer">

          <span>
            REACT COUNTER APPLICATION
          </span>

          <span>
            useState HOOK
          </span>

        </div>

      </div>

    </div>
  );
}

export default App;