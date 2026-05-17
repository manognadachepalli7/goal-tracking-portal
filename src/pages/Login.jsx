import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Goal Tracking Portal</h1>

      <h3>Select Role</h3>

      <button onClick={() => navigate("/employee")}>
        Employee Login
      </button>

      <br /><br />

      <button onClick={() => navigate("/manager")}>
        Manager Login
      </button>

      <br /><br />

      <button onClick={() => navigate("/admin")}>
        Admin Login
      </button>
    </div>
  );
}

export default Login;