import { useNavigate } from "react-router-dom";

function Login(){

const navigate=useNavigate();

return(

<div className="page">

<div className="card">

<h1>🚀 GoalSync</h1>

<p>
Smart KPI & Performance Management Portal
</p>

<div className="stats">

<div className="statBox">
🏆 Goal Master
</div>

<div className="statBox">
⭐ Top Performer
</div>

<div className="statBox">
🚀 Fast Completion
</div>

</div>

<br/>

<h2>Notifications</h2>

<div className="goalCard">

🔔 Sales goal approved

<br/><br/>

🔔 Q1 review completed

<br/><br/>

🔔 Shared KPI assigned

</div>

<br/>

<h2>Shared KPI</h2>

<div className="goalCard">

Department KPI :
Customer Satisfaction 95%

<br/><br/>

Department KPI :
Reduce Complaints below 10

</div>

<br/>

<div className="roleButtons">

<button
className="blue"
onClick={() =>
navigate("/employee")
}
>
Employee
</button>

<button
className="green"
onClick={() =>
navigate("/manager")
}
>
Manager
</button>

<button
className="red"
onClick={() =>
navigate("/admin")
}
>
Admin
</button>

</div>

</div>

</div>

);

}

export default Login;