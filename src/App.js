import React from "react";
import useTimer from "./useTimer";
import { formatTime } from "./formatTime";

function App() {
  const { time, startTimer, stopTimer, resetTimer, active } = useTimer(0);

  return (
    <>
      <div className="App container">
        <h1>Coder Timer 1</h1>
        <div className="timer__wrapper">
          <div className="timer__display">
            <p>{formatTime(time)}</p>
          </div>
          <div className="button__wrapper">
            <button className="button" onClick={stopTimer}>
              Stop
            </button>
            <button className="button" ref={active} onClick={startTimer}>
              Start
            </button>
            <button className="button" onClick={resetTimer}>
              Reset
            </button>
            <button className="button" onClick={resetTimer}>
              Save
            </button>
          </div>
        </div>
      </div>
      <div className="App container">
        <h1>Coder Timer 2</h1>
        <div className="timer__wrapper">
          <div className="timer__display">
            <p>{formatTime(time)}</p>
          </div>
          <div className="button__wrapper">
            <button className="button" onClick={stopTimer}>
              Stop
            </button>
            <button className="button" ref={active} onClick={startTimer}>
              Start
            </button>
            <button className="button" onClick={resetTimer}>
              Reset
            </button>
            <button className="button" onClick={resetTimer}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
