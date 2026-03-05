import { useState } from "react";

export default function WeightExercise({ name, goBack }) {
  const [weight, setWeight] = useState(0);

  return (
    <div>
      <h2>{name}</h2>
      <h3>{weight} lbs</h3>

      <button
        onClick={() => setWeight(weight + 5)}
        style={{ margin: "10px", padding: "10px 20px" }}
      >
        Increase Weight (+5)
      </button>

      <button
        onClick={() => setWeight(weight > 0 ? weight - 5 : 0)}
        style={{ margin: "10px", padding: "10px 20px" }}
      >
        Decrease Weight (-5)
      </button>

      <button
        onClick={() => setWeight(0)}
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