import React from "react";
import useTimer from "./useTimer";
import { formatTime } from "./formatTime";
import Timer from "./components/Timer";

function App() {
  const { time, startTimer, stopTimer, resetTimer, active } = useTimer(0);
  const {
    time: time2,
    startTimer: startTimer2,
    stopTimer: stopTimer2,
    resetTimer: resetTimer2,
    active: active2,
  } = useTimer(0);

  return (
    <>
      <Timer
        timeTitle="Coder Timer 1"
        formatTime={formatTime}
        time={time}
        stopTimer={stopTimer}
        active={active}
        startTimer={startTimer}
        resetTimer={resetTimer}
      />
      <Timer
        timeTitle="Coder Timer 2"
        formatTime={formatTime}
        time={time2}
        stopTimer={stopTimer2}
        active={active2}
        startTimer={startTimer2}
        resetTimer={resetTimer2}
      />
    </>
  );
}

export default App;
