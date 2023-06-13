import React from "react";
import "./calc.css";
// import Display from "./Display";
// import Button from "./button";
import { useState } from "react";
import "./display.css";

export default function Calculator() {
  const [history, setHistory] = useState("");
  const [calculation, setCalculation] = useState("");
  const handleClick = (e) => {
    setCalculation(calculation.concat(e.target.name));
  };
  const clear = () => {
    setCalculation("");
    setHistory("")
  };
  const backspace = () => {
    setCalculation(calculation.slice(0, -1));
  };
  const calculate = () => {
    try {
      setCalculation(eval(calculation).toString());
      setHistory(calculation);
    } catch (err) {
      setCalculation("Error");
      setHistory("Enter valid data, try agin!");
    }
  };
  return (
    <div className="container">
      <div className="calculator">
        <div className="introduction">
          <h4 id="casio">CASIO</h4>
          <h6 className="model">
            MX-85
            <br />
            TWO WAY POWER
          </h6>
          <div className="cell">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
        <div className="display">
          <form action="">
            <div className="screen">
              <input type="text" className="history" value={history} readOnly />
              <input
                type="text"
                className="calc"
                value={calculation}
                readOnly
              />
            </div>
          </form>
        </div>
        <div className="buttons">
          <button className="operators" id="all-clear" onClick={clear}>
            AC
          </button>
          <button className="operators" onClick={backspace}>
            DE
          </button>
          <button name="/" className="operators" onClick={handleClick}>
            &divide;
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button name="*" className="operators" onClick={handleClick}>
            &times;
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button name="-" className="operators" onClick={handleClick}>
            &ndash;
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button name="+" className="operators" onClick={handleClick}>
            +
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button name="." onClick={handleClick}>
            .
          </button>
          <button className="operators" id="output" onClick={calculate}>
            =
          </button>
        </div>
      </div>
        <div className="copy-right">
          <h3>
            Made By: UMER SHAH <span>&copy;</span>
          </h3>
        </div>
    </div>
  );
}
