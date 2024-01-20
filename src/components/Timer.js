import React from "react";

function Timer({
  formatTime,
  time,
  stopTimer,
  active,
  startTimer,
  resetTimer,
  timeTitle,
}) {
  return (
    <div className="App container">
      <h1>{timeTitle}</h1>
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
        </div>
      </div>
    </div>
  );
}

export default Timer;
