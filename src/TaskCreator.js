import React, { useState } from "react";
import { connect } from "react-redux";
import { updateElapsed } from "./reducer";

function TaskCreator({ dispatch }) {
  const [taskName, setTaskName] = useState("");
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const handleStart = () => {
    if (!timer) {
      const newTimer = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
      setTimer(newTimer);
    }
  };

  const handleStop = () => {
    if (timer) {
      clearInterval(timer);
      dispatch(updateElapsed(taskName, elapsedTime));
      setTimer(null);
      setElapsedTime(0);
    }
  };

  const handleFocus = () => {
    console.log("handleFocus");
    if (timer) {
      clearInterval(timer); // Pause the timer
      setTimer(null);
    }
  };

  const handleBlur = (e) => {
    console.log("blur");
    if (!timer) {
      const newTimer = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1000);
      setTimer(newTimer); // Resume the timer
    }
  };

  const handleChange = (e) => {
    console.log("handleChange");
    setElapsedTime(parseInt(e.target.value, 10));
  };

  console.log(elapsedTime);

  return (
    <div>
      <label>
        Task name
        <input
          id="taskName"
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </label>
      <label>
        Time elapsed
        <input
          id="timeField"
          type="number"
          value={elapsedTime}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </label>
      <button type="button" onClick={handleStart}>
        START
      </button>
      <button type="button" onClick={handleStop}>
        STOP
      </button>
    </div>
  );
}

export default connect()(TaskCreator);
