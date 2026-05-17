import { useState } from "react";

function Employee(){

const [search,setSearch]=useState("");

const goals=[
{
title:"Increase Sales",
status:"Approved"
},
{
title:"Customer Satisfaction",
status:"Pending"
},
{
title:"Employee Training",
status:"Approved"
},
{
title:"Reduce Complaints",
status:"Rejected"
}
];

const filteredGoals=goals.filter(goal =>
goal.title.toLowerCase().includes(
search.toLowerCase()
)
);

return(

<div className="page">

<div className="card">

<h1>Employee Dashboard</h1>

<h2>🏆 Achievements</h2>

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

<h2>🔍 Search Goals</h2>

<input
placeholder="Search goal..."
value={search}
onChange={(e)=>
setSearch(e.target.value)
}
/>

<div className="goalGrid">

{filteredGoals.map((goal,index)=>(

<div
className="goalCard"
key={index}
>

<h3>{goal.title}</h3>

<p>
Status:
{" "}
{goal.status}
</p>

</div>

))}

</div>

<br/>

<h2>🤖 AI Recommendation</h2>

<div className="goalCard">

<p>
Increase customer satisfaction target by 5%
</p>

<p>
Reduce complaint threshold
</p>

<p>
Improve delivery speed KPI
</p>

</div>

</div>

</div>

);

}

export default Employee;