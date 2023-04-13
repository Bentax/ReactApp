import React, { useState } from "react";
import * as math from "mathjs";

function Calculator() {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClearButtonClick = () => {
    setInput("");
  };

  const handleEqualsButtonClick = () => {
    try {
      setInput(math.evaluate(input).toString());
    } catch (error) {
      console.log(error); // Handle error
    }
  };

  return (
    <div>
      <input type="text" value={input} desabled />
      <div>
        <button type="button" onClick={() => handleButtonClick("1")}>
          1
        </button>
        <button type="button" onClick={() => handleButtonClick("2")}>
          2
        </button>
        <button type="button" onClick={() => handleButtonClick("3")}>
          3
        </button>
        <button type="button" onClick={() => handleButtonClick("+")}>
          +
        </button>
      </div>
      <div>
        <button type="button" onClick={() => handleButtonClick("4")}>
          4
        </button>
        <button type="button" onClick={() => handleButtonClick("5")}>
          5
        </button>
        <button type="button" onClick={() => handleButtonClick("6")}>
          6
        </button>
        <button type="button" onClick={() => handleButtonClick("-")}>
          -
        </button>
      </div>
      <div>
        <button type="button" onClick={() => handleButtonClick("7")}>
          7
        </button>
        <button type="button" onClick={() => handleButtonClick("8")}>
          8
        </button>
        <button type="button" onClick={() => handleButtonClick("9")}>
          9
        </button>
        <button type="button" onClick={() => handleButtonClick("*")}>
          *
        </button>
      </div>
      <div>
        <button type="button" onClick={() => handleButtonClick("0")}>
          0
        </button>
        <button type="button" onClick={() => handleButtonClick(".")}>
          .
        </button>
        <button type="button" onClick={() => handleClearButtonClick()}>
          C
        </button>
        <button type="button" onClick={() => handleButtonClick("/")}>
          /
        </button>
      </div>
      <div>
        <button type="button" onClick={() => handleEqualsButtonClick()}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
