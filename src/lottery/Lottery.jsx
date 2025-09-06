import React, { useState } from "react";
import './lottery.css'
export default function Lottery() {
  const [numbers, setNumbers] = useState([0, 0, 0]);
  const [result, setResult] = useState("");

  const create = () => {
    const newNumbers = [
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
    ];
    setNumbers(newNumbers);

    if (newNumbers[0] === newNumbers[1] && newNumbers[1] === newNumbers[2]) {
      setResult("YOU WON!");
    } else {
      setResult("YOU LOST!");
    }
  };

  return (
    <div className="app">
      <h1 className="title">Lottery App</h1>

      <div className="container">
   
          <div className="box">  {numbers[0]} </div>
          <div className="box">  {numbers[1]} </div>
          <div className="box">  {numbers[2]} </div>
     
      </div>

      <button onClick={create} className="btn"> Lottery</button>
      {result && <p className="result">{result}</p>}
    </div>
  );
}
