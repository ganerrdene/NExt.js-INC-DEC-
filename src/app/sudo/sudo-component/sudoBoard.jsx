"use client";
import { useState } from "react";
import styles from "./sudoBoard.module.css";

const sudoBoard = () => {
  const [number, setNumber] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  function inc() {
    let sorted = number.sort((a, b) => a - b);
    setNumber([...sorted]);
  }
  function dec() {
    let sorted = number.sort((a, b) => b - a);
    setNumber([...sorted]);
  }
  return (
    <div className={styles.board}>
      <div className={styles.boardAction}>
        <button
          className="incBtn"
          onClick={() => {
            inc();
          }}
        >
          Inc
        </button>
        <button
          className="decBtn"
          onClick={() => {
            dec();
          }}
        >
          Dec
        </button>
      </div>
      <div className={styles.boardBtns}>
        {number.map((num) => {
          return <button>{num}</button>;
        })}
      </div>
    </div>
  );
};
export default sudoBoard;
