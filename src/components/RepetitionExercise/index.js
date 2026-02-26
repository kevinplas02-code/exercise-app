import { useState } from "react";

export default function RepetitionExercise({ name, goBack }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{name}</h2>
      <h3>{count}</h3>

      <button
        onClick={() => setCount(count + 1)}
        style={{ margin: "10px", padding: "10px 20px" }}
      >
        Add Repetition
      </button>

      <button
        onClick={() => setCount(0)}
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