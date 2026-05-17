import { useState } from "react";

function Manager() {
  const [goals, setGoals] = useState([
    {
      title: "Increase Sales Revenue",
      target: "100000",
      weight: "20%",
      status: "Pending",
    },
    {
      title: "Reduce Customer Complaints",
      target: "10",
      weight: "10%",
      status: "Pending",
    },
    {
      title: "Improve Project Delivery Time",
      target: "30 days",
      weight: "15%",
      status: "Pending",
    },
  ]);

  const approveGoal = (index) => {
    const updated = [...goals];
    updated[index].status = "Approved";
    setGoals(updated);
  };

  const rejectGoal = (index) => {
    const updated = [...goals];
    updated[index].status = "Rejected";
    setGoals(updated);
  };

  return (
    <div className="page">
      <div className="card">

        <h1>Manager Dashboard</h1>

        {goals.map((goal, index) => (
          <div className="goalCard" key={index}>

            <h3>{goal.title}</h3>

            <p>
              <b>Target:</b> {goal.target}
            </p>

            <p>
              <b>Weight:</b> {goal.weight}
            </p>

            <p>
              <b>Status:</b>

              <span
                className={
                  goal.status === "Approved"
                    ? "approved"
                    : goal.status === "Rejected"
                    ? "rejected"
                    : "pending"
                }
              >
                {" "}
                {goal.status}
              </span>
            </p>

            <button
              className="green"
              onClick={() => approveGoal(index)}
            >
              Approve
            </button>

            <button
              className="red"
              onClick={() => rejectGoal(index)}
            >
              Reject
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Manager;