import React from "react";
import "./App.css"
import { useState } from "react";


const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="wrap-div">
      <button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>+</button>
    <div>
      <h1>Prva verzija</h1>
    </div>
    </div>
  );
}

export default App;
