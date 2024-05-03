import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const add = () => {
    setResult(Number(num1) + Number(num2));
  };

  return (
    <div className="App">
      <input
        type="number"
        onChange={(e) => {
          setNum1(e.target.value);
        }}
      />
      <input
        type="number"
        onChange={(e) => {
          setNum2(e.target.value);
        }}
      />
      <button onClick={add}>더하다</button>
      <h1>{result}</h1>
    </div>
  );
}

export default App;
