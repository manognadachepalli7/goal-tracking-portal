import { useNavigate } from "react-router-dom";

function Login(){

const navigate=useNavigate();

return(

<div className="page">

<div className="card">

<h1>🚀 Goal Tracking Portal</h1>

<p>
Smart KPI & Performance Management System
</p>

<div className="stats">

<div className="statBox">
📈 Track Goals
</div>

<div className="statBox">
🤝 Approve Faster
</div>

<div className="statBox">
🏆 Improve Performance
</div>

</div>

<br/>

<h2>Features</h2>

<div className="goalGrid">

<div className="goalCard">
🏆 Achievement System
</div>

<div className="goalCard">
🔍 Search & Filter
</div>

<div className="goalCard">
🤖 AI Recommendation
</div>

<div className="goalCard">
📊 KPI Dashboard
</div>

</div>

<br/>

<h2>Select Role</h2>

<div className="roleButtons">

<button
className="blue"
onClick={()=>
navigate("/employee")
}
>
👨 Employee
</button>

<button
className="green"
onClick={()=>
navigate("/manager")
}
>
👩‍💼 Manager
</button>

<button
className="red"
onClick={()=>
navigate("/admin")
}
>
🛡 Admin
</button>

</div>

<br/>

<div className="goalCard">

<h3>AI Insight</h3>

<p>
"Customer satisfaction can be improved by increasing KPI target by 5%"
</p>

</div>

</div>

</div>

);

}

export default Login;