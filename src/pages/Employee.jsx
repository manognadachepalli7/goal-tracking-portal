import { useState } from "react";

function Employee() {
  const [title, setTitle] = useState("");
  const [target, setTarget] = useState("");
  const [weight, setWeight] = useState("");
  const [goals, setGoals] = useState([]);

  const addGoal = () => {
    if (goals.length >= 8) {
      alert("Maximum 8 goals allowed");
      return;
    }

    if (Number(weight) < 10) {
      alert("Minimum weight is 10%");
      return;
    }

    const total =
      goals.reduce((sum, g) => sum + Number(g.weight), 0) +
      Number(weight);

    if (total > 100) {
      alert("Total weight cannot exceed 100%");
      return;
    }

    setGoals([
      ...goals,
      {
        title,
        target,
        weight,
      },
    ]);

    setTitle("");
    setTarget("");
    setWeight("");
  };

  return (
    <div>
      <h1>Employee Dashboard</h1>

      <input
        placeholder="Goal Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Target"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Weight %"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <br /><br />

      <button onClick={addGoal}>
        Add Goal
      </button>

      <h3>Goals</h3>

      {goals.map((g, i) => (
        <div key={i}>
          {g.title} | {g.target} | {g.weight}%
        </div>
      ))}
    </div>
  );
}

export default Employee;