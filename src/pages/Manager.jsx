function Manager() {
  const goals = [
    {
      title: "Increase Sales Revenue",
      target: "100000",
      weight: "20%"
    },
    {
      title: "Reduce Customer Complaints",
      target: "10",
      weight: "10%"
    },
    {
      title: "Improve Project Delivery Time",
      target: "30 days",
      weight: "15%"
    }
  ];

  return (
    <div>
      <h1>Manager Dashboard</h1>

      {goals.map((goal, index) => (
        <div key={index}>
          <h3>{goal.title}</h3>

          <p>Target: {goal.target}</p>

          <p>Weight: {goal.weight}</p>

          <button>
            Approve
          </button>

          <button>
            Reject
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Manager;