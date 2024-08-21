import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <section className="counter-container">
        <h1>Counter</h1>
        <p className="counter">{count}</p>

        <div className="buttons-wrapper">
          <button className="counter__increase" onClick={() => setCount((count) => count + 1)}>
            +
          </button>
          <button className="counter__decrease" onClick={() => setCount((count) => count - 1)}>
            -
          </button>
        </div>
        <button className="counter__reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </section>
    </>
  );
}

export default App;
