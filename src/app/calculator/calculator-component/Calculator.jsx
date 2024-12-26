import { useState } from "react";

export const Calculator = () => {
  const [screen, setScreen] = useState("");
  let [output, setOutput] = useState(0);

  function print(too) {
    setScreen(screen + too);
  }
  function operationHandler() {
    const nums = screen.split("+");

    const newNum = nums.map((num) => {
      return Number(num);
    });
    console.log(newNum);
    output = 0;
    // const newNum = [984, 6748, 3764, 35]
    for (let i = 0; i < newNum.length; i++) {
      output += newNum[i];
    }
    setOutput(output);
  }

  function clear() {
    setScreen("");
    setOutput(0);
  }
  return (
    <div className="calculator">
      <div className="screen">
        <div className="operation">{screen}</div>
        <div className="output">{output}</div>
      </div>
      <div className="inputs">
        <button onClick={() => print(7)}>7</button>
        <button onClick={() => print(8)}>8</button>
        <button onClick={() => print(9)}>9</button>
        <button onClick={() => print(" x ")}>x</button>
        <button onClick={() => print(4)}>4</button>
        <button onClick={() => print(5)}>5</button>
        <button onClick={() => print(6)}>6</button>
        <button onClick={() => print(" - ")}>-</button>
        <button onClick={() => print(1)}>1</button>
        <button onClick={() => print(2)}>2</button>
        <button onClick={() => print(3)}>3</button>
        <button onClick={() => print(" + ")}>+</button>
        <button onClick={() => print(0)}>0</button>
        <button onClick={operationHandler}>=</button>
        <button onClick={clear}>C</button>
        <button onClick={() => print(" / ")}>/</button>
      </div>
    </div>
  );
};
