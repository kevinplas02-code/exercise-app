import { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";

export default function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
    { name: "Push-Ups", type: "repetition" },
    { name: "Sit-Ups", type: "repetition" },
    { name: "Plank", type: "duration" },
    { name: "Wall-Sit", type: "duration" }
  ];

  const goBack = () => {
    setSelectedExercise(null);
  };

  let renderedComponent = <p>Choose an Exercise</p>;
  if (selectedExercise) {
    if (selectedExercise.type === "repetition") {
      renderedComponent = (
        <RepetitionExercise
          name={selectedExercise.name}
          goBack={goBack}
        />
      );
    } else if (selectedExercise.type === "duration") {
      renderedComponent = (
        <DurationExercise
          name={selectedExercise.name}
          goBack={goBack}
        />
      );
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Exercise Menu</h1>

      {!selectedExercise &&
        exercises.map((exercise, index) => (
          <button
            key={index}
            onClick={() => setSelectedExercise(exercise)}
            style={{
              margin: "10px",
              padding: "10px 20px",
              fontSize: "16px"
            }}
          >
            {exercise.name}
          </button>
        ))}

      <div style={{ marginTop: "30px" }}>
        {renderedComponent}
      </div>
    </div>
  );
}
