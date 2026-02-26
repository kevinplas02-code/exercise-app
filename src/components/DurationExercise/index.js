import { useState, useEffect } from "react";

export default function DurationExercise({ name, goBack }) {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (running) {
      interval = setInterval(() => {
        setTime(prev => prev + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [running]);

  const formatTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const ms = Math.floor((milliseconds % 1000) / 10);
    const paddedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const paddedSeconds = seconds < 10 ? "0" + seconds : seconds;
    const paddedMilliseconds = ms < 10 ? "0" + ms : ms;
    return `${paddedMinutes}:${paddedSeconds}:${paddedMilliseconds}`;
  };

  return (
    <div>
      <h2>{name}</h2>
      <h3>{formatTime(time)}</h3>

      <button
        onClick={() => setRunning(true)}
        style={{ margin: "10px", padding: "10px 20px" }}
      >
        Start
      </button>

      <button
        onClick={() => {
          setRunning(false);
          setTime(0);
        }}
        style={{ margin: "10px", padding: "10px 20px" }}
      >
        Reset
      </button>

      <button
        onClick={goBack}
        style={{ margin: "10px", padding: "10px 20px" }}
      >
        Return to Menu
      </button>
    </div>
  );
}