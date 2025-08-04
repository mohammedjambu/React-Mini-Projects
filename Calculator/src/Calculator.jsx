import { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  let [input, setInput] = useState("");

  let handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  let handleClear = () => {
    setInput("");
  };

  let handleEqual = () => {
    try {
      let result = eval(input);
      setInput(result.toString());
    } catch (err) {
      setInput("Error");
    }
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  return (
    <>
    <h1 className="heading">Calculator</h1>
      <div className="calculator">
        <div className="display">{input || "0"}</div>
        <div className="buttons">
          {/* Row 1 */}
          <button className="btn" onClick={handleClear}>
            C
          </button>
          <button className="btn" onClick={() => handleButtonClick("/")}>
            ÷
          </button>
          <button className="btn" onClick={() => handleButtonClick("*")}>
            ×
          </button>
          <button className="btn" onClick={handleBackspace}>
            ←
          </button>

          {/* Row 2 */}
          <button className="btn" onClick={() => handleButtonClick("7")}>
            7
          </button>
          <button className="btn" onClick={() => handleButtonClick("8")}>
            8
          </button>
          <button className="btn" onClick={() => handleButtonClick("9")}>
            9
          </button>
          <button className="btn" onClick={() => handleButtonClick("-")}>
            −
          </button>

          {/* Row 3 */}
          <button className="btn" onClick={() => handleButtonClick("4")}>
            4
          </button>
          <button className="btn" onClick={() => handleButtonClick("5")}>
            5
          </button>
          <button className="btn" onClick={() => handleButtonClick("6")}>
            6
          </button>
          <button className="btn" onClick={() => handleButtonClick("+")}>
            +
          </button>

          {/* Row 4 */}
          <button className="btn" onClick={() => handleButtonClick("1")}>
            1
          </button>
          <button className="btn" onClick={() => handleButtonClick("2")}>
            2
          </button>
          <button className="btn" onClick={() => handleButtonClick("3")}>
            3
          </button>
          <button className="btn equal" onClick={handleEqual}>
            =
          </button>

          {/* Row 5 */}
          <button className="btn zero" onClick={() => handleButtonClick("0")}>
            0
          </button>
          <button className="btn zero" onClick={() => handleButtonClick("00")}>
            00
          </button>
          <button className="btn" onClick={() => handleButtonClick(".")}>
            .
          </button>
        </div>
      </div>
    </>
  );
}
